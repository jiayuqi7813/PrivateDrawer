import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureVault - 专业级macOS文件加密管理应用',
  description: 'SecureVault是一款专为macOS设计的企业级文件加密和管理应用，采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。',
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
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
