# 私密抽屉官方网站

这是私密抽屉（Private Drawer）的官方落地页网站，采用 Next.js 14 和 Tailwind CSS 构建。

## 🚀 特性

- ⚡ **高性能**: Next.js 14 App Router 和服务端渲染
- 🎨 **现代设计**: 响应式设计，支持深色模式
- 📱 **移动友好**: 完全响应式，适配所有设备
- 🔍 **SEO 优化**: 完整的元数据、结构化数据和站点地图
- ♿ **无障碍**: 遵循 WCAG 2.1 无障碍标准
- 🎭 **动画效果**: Framer Motion 流畅动画
- 🚀 **快速部署**: 一键部署到 Vercel

## 📦 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel
- **语言**: TypeScript

## 🛠️ 本地开发

### 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 预览生产版本

```bash
npm run start
# 或
yarn start
```

## 📁 项目结构

```
landing-page/
├── app/                    # Next.js App Router
│   ├── components/         # React 组件
│   │   ├── Header.tsx     # 网站头部
│   │   └── Footer.tsx     # 网站底部
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── sitemap.ts         # 站点地图
│   └── robots.txt         # 爬虫配置
├── public/                 # 静态资源
│   ├── images/            # 图片资源
│   └── site.webmanifest   # PWA 配置
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── next.config.js         # Next.js 配置
└── vercel.json           # Vercel 部署配置
```

## 🎨 设计系统

### 颜色主题

- **主色调**: 蓝色渐变 (`from-blue-600 to-indigo-600`)
- **辅助色**: 灰色系列 (`gray-50` 到 `gray-900`)
- **强调色**: 绿色 (`green-500`)、红色 (`red-500`)

### 字体

- **主要字体**: Inter, SF Pro Display, 系统字体
- **等宽字体**: SF Mono, Monaco, Consolas

### 动画

- **进入动画**: 淡入 + 向上滑动
- **悬停效果**: 缩放、阴影、颜色变化
- **页面切换**: 平滑过渡

## 📈 SEO 优化

### 元数据优化

- 完整的页面标题和描述
- 开放图谱 (Open Graph) 标签
- Twitter Card 标签
- 结构化数据 (JSON-LD)

### 性能优化

- 图片优化和延迟加载
- 代码分割和懒加载
- 静态资源缓存
- Lighthouse 得分 > 95

### 搜索引擎优化

- 语义化 HTML 结构
- 合理的标题层级 (H1-H6)
- 站点地图和 robots.txt
- 内部链接优化

## 🚀 部署到 Vercel

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/private-drawer-landing)

### 手动部署

1. 克隆项目到本地
2. 在 Vercel 控制台导入项目
3. 配置环境变量（如需要）
4. 部署

### 环境变量

项目暂时不需要环境变量，所有配置都在代码中。

## 📊 性能指标

- **Lighthouse 性能**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 自定义配置

### 修改品牌信息

编辑 `app/layout.tsx` 中的元数据：

```typescript
export const metadata: Metadata = {
  title: '您的应用名称',
  description: '您的应用描述',
  // 其他元数据...
}
```

### 修改颜色主题

编辑 `tailwind.config.js` 中的颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 您的主色调
      }
    }
  }
}
```

### 添加新页面

在 `app/` 目录下创建新的路由文件夹和 `page.tsx` 文件。

## 🐛 问题排查

### 构建失败

1. 检查 Node.js 版本是否符合要求
2. 清除缓存：`rm -rf .next node_modules package-lock.json`
3. 重新安装依赖：`npm install`

### 样式问题

1. 确保 Tailwind CSS 配置正确
2. 检查 `globals.css` 中的样式导入
3. 验证 PostCSS 配置

### 部署问题

1. 检查 `vercel.json` 配置
2. 确保所有依赖都在 `package.json` 中
3. 查看 Vercel 部署日志

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📞 联系我们

- 邮箱: hello@private-drawer.com
- GitHub: [@private-drawer](https://github.com/your-org/private-drawer)
- 网站: [https://private-drawer.vercel.app](https://private-drawer.vercel.app)

---

**注意**: 这是私密抽屉应用的官方网站源码，与主应用程序分离维护。
