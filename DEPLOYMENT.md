# 私密抽屉落地页部署指南

本文档详细介绍如何将私密抽屉落地页部署到Vercel平台。

## 🚀 快速部署

### 方式一：一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/private-drawer-landing)

点击上方按钮，直接从GitHub仓库部署到Vercel。

### 方式二：GitHub集成部署

1. **准备GitHub仓库**
   ```bash
   # 推送代码到GitHub
   git init
   git add .
   git commit -m "Initial commit: 私密抽屉落地页"
   git branch -M main
   git remote add origin https://github.com/your-org/private-drawer-landing.git
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择GitHub仓库 `private-drawer-landing`
   - 确认构建设置并部署

3. **配置自定义域名**（可选）
   - 在Vercel项目设置中添加自定义域名
   - 配置DNS记录指向Vercel

## 🛠️ 本地部署

### 环境要求

- Node.js 18.17.0+
- npm 或 yarn
- Git

### 安装和运行

```bash
# 克隆项目
git clone https://github.com/your-org/private-drawer-landing.git
cd private-drawer-landing

# 安装依赖
npm install

# 开发模式运行
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run start
```

### 使用部署脚本

项目包含自动化部署脚本：

```bash
# 运行部署脚本
./deploy.sh
```

脚本会自动执行：
- 环境检查
- 依赖安装
- 代码检查
- 项目构建
- 部署到Vercel

## ⚙️ 配置说明

### 环境变量配置

复制 `env.example` 为 `.env.local` 并配置：

```bash
cp env.example .env.local
```

主要配置项：

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `NEXT_PUBLIC_SITE_URL` | 网站URL | `https://private-drawer.vercel.app` |
| `NEXT_PUBLIC_GITHUB_REPO` | GitHub仓库 | `your-org/private-drawer` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | 联系邮箱 | `hello@private-drawer.com` |

### Vercel项目配置

在Vercel项目设置中配置以下环境变量：

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_REPO=your-org/private-drawer
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
```

### 构建配置

项目使用以下构建配置：

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm ci`

## 🔧 自定义配置

### 修改品牌信息

1. **更新logo和图标**
   - 替换 `public/` 目录下的图标文件
   - 更新 `public/site.webmanifest` 中的应用信息

2. **修改网站元数据**
   - 编辑 `app/layout.tsx` 中的 metadata 配置
   - 更新SEO相关信息

3. **自定义主题颜色**
   - 修改 `tailwind.config.js` 中的颜色配置
   - 更新 `app/globals.css` 中的CSS变量

### 添加分析工具

1. **Google Analytics**
   ```typescript
   // app/layout.tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout() {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

2. **Hotjar**
   ```typescript
   // 在 app/layout.tsx 的 head 部分添加
   <script
     dangerouslySetInnerHTML={{
       __html: `
         (function(h,o,t,j,a,r){
           h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
           h._hjSettings={hjid:XXXXXXX,hjsv:6};
           // ... Hotjar代码
         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
       `
     }}
   />
   ```

## 🌐 多语言支持

如需添加多语言支持：

1. **安装国际化库**
   ```bash
   npm install next-intl
   ```

2. **配置语言文件**
   ```
   locales/
   ├── en.json
   ├── zh-CN.json
   └── zh-TW.json
   ```

3. **更新路由配置**
   ```typescript
   // next.config.js
   const nextConfig = {
     i18n: {
       locales: ['zh-CN', 'en', 'zh-TW'],
       defaultLocale: 'zh-CN',
     },
   }
   ```

## 📊 性能优化

### 图片优化

1. **使用Next.js Image组件**
   ```typescript
   import Image from 'next/image'
   
   <Image
     src="/screenshot.png"
     alt="私密抽屉截图"
     width={800}
     height={600}
     placeholder="blur"
     blurDataURL="data:image/jpeg;base64,..."
   />
   ```

2. **WebP格式转换**
   ```bash
   # 安装工具
   npm install next-optimized-images
   
   # 自动优化图片
   npm run build
   ```

### 代码分割

```typescript
// 动态导入组件
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

## 🔒 安全配置

### 内容安全策略 (CSP)

```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

### HTTPS重定向

```json
// vercel.json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "x-forwarded-proto",
          "value": "http"
        }
      ],
      "destination": "https://private-drawer.vercel.app/$1",
      "permanent": true
    }
  ]
}
```

## 📈 监控和维护

### 错误监控

推荐使用 Sentry 进行错误监控：

```bash
npm install @sentry/nextjs
```

### 性能监控

1. **Vercel Analytics**
   - 在Vercel dashboard中启用Analytics
   - 监控页面性能和用户行为

2. **Web Vitals监控**
   ```typescript
   // app/layout.tsx
   import { reportWebVitals } from 'next/web-vitals'
   
   export function reportWebVitals(metric) {
     // 发送到分析服务
     console.log(metric)
   }
   ```

### 定期更新

1. **依赖更新**
   ```bash
   # 检查过期依赖
   npm outdated
   
   # 更新依赖
   npm update
   ```

2. **安全更新**
   ```bash
   # 检查安全漏洞
   npm audit
   
   # 修复安全问题
   npm audit fix
   ```

## 🐛 故障排除

### 常见问题

1. **构建失败**
   - 检查Node.js版本兼容性
   - 清除缓存：`rm -rf .next node_modules`
   - 重新安装依赖：`npm install`

2. **样式问题**
   - 确认Tailwind CSS配置正确
   - 检查PostCSS配置
   - 验证CSS导入顺序

3. **部署问题**
   - 检查环境变量配置
   - 验证vercel.json配置
   - 查看Vercel部署日志

### 获取帮助

- 📧 邮箱：support@private-drawer.com
- 🐛 GitHub Issues：[项目问题页面](https://github.com/your-org/private-drawer-landing/issues)
- 💬 Discord：[社区讨论](https://discord.gg/private-drawer)

---

**注意**: 部署前请确保所有敏感信息已正确配置，生产环境中不要暴露开发用的密钥或配置。
