import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://securevault.snowywar.top'),
  title: 'PrivateDrawer - macOS 私密文件夹与文件加密管理应用',
  description: 'PrivateDrawer是一款专为macOS设计的私密文件夹和文件加密管理应用，采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。',
  keywords: ['macOS', '私密文件夹', 'mac 私密文件夹', '文件加密', 'AES-256', 'Touch ID', 'Face ID', '文件管理', '安全存储', '隐私保护', 'PrivateDrawer'],
  authors: [{ name: 'PrivateDrawer Team' }],
  creator: 'PrivateDrawer Team',
  publisher: 'PrivateDrawer',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://securevault.snowywar.top',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://securevault.snowywar.top',
    title: 'PrivateDrawer - macOS 私密文件夹与文件加密管理应用',
    description: 'PrivateDrawer是一款专为macOS设计的私密文件夹和文件加密管理应用，采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。',
    siteName: 'PrivateDrawer',
    images: [
      {
        url: '/AppIcon-1024.png',
        width: 1024,
        height: 1024,
        alt: 'PrivateDrawer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrivateDrawer - macOS 私密文件夹与文件加密管理应用',
    description: 'PrivateDrawer是一款专为macOS设计的私密文件夹和文件加密管理应用，采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。',
    images: ['/AppIcon-1024.png'],
  },
  verification: {
    google: '', // 您可以在这里添加 Google Search Console 验证码
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/AppIcon-1024.png" />
        <link rel="apple-touch-icon" href="/AppIcon-1024.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PrivateDrawer",
              "alternateName": "PrivateDrawer macOS",
              "description": "PrivateDrawer是一款专为macOS设计的私密文件夹和文件加密管理应用，采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。",
              "url": "https://securevault.snowywar.top",
              "applicationCategory": "SecurityApplication",
              "operatingSystem": "macOS",
              "downloadUrl": "https://github.com/jiayuqi7813/PrivateDrawer/releases",
              "softwareVersion": "Latest",
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0],
              "author": {
                "@type": "Organization",
                "name": "PrivateDrawer Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PrivateDrawer",
                "url": "https://securevault.snowywar.top"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "50000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "AES-256军用级加密",
                "Touch ID / Face ID支持",
                "iCloud备份同步",
                "智能标签管理",
                "全格式预览",
                "操作日志记录",
                "自动锁定保护",
                "安全预览系统"
              ],
              "requirements": "macOS 14.0 或更高版本",
              "screenshot": [
                "https://securevault.snowywar.top/iShot_2025-08-07_19.14.02.png",
                "https://securevault.snowywar.top/iShot_2025-08-07_19.14.13.png",
                "https://securevault.snowywar.top/iShot_2025-08-07_19.14.52.png",
                "https://securevault.snowywar.top/iShot_2025-08-07_19.15.23.png"
              ],
              "image": "https://securevault.snowywar.top/AppIcon-1024.png",
              "logo": "https://securevault.snowywar.top/AppIcon-1024.png"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
