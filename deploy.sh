#!/bin/bash

# 私密抽屉落地页部署脚本
# 用于自动化构建和部署到Vercel

set -e

echo "🚀 开始部署私密抽屉落地页..."

# 检查Node.js版本
node_version=$(node --version)
echo "📋 当前Node.js版本: $node_version"

if [[ "$node_version" < "v18.17.0" ]]; then
    echo "❌ 错误: 需要Node.js 18.17.0或更高版本"
    exit 1
fi

# 清理旧的构建文件
echo "🧹 清理旧的构建文件..."
rm -rf .next out node_modules/.cache

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 运行代码检查
echo "🔍 运行代码检查..."
npm run lint

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ -d "out" ]; then
    echo "✅ 构建成功！"
    echo "📁 输出目录大小: $(du -sh out | cut -f1)"
    echo "📄 生成的文件数量: $(find out -type f | wc -l)"
else
    echo "❌ 构建失败！"
    exit 1
fi

# 部署到Vercel (如果已安装Vercel CLI)
if command -v vercel &> /dev/null; then
    echo "🚀 部署到Vercel..."
    vercel --prod
    echo "✅ 部署完成！"
else
    echo "⚠️  未安装Vercel CLI，请手动部署或运行: npm i -g vercel"
    echo "💡 或者将代码推送到GitHub，通过Vercel GitHub集成自动部署"
fi

echo "🎉 部署流程完成！"
echo "🌐 网站地址: https://private-drawer.vercel.app"
