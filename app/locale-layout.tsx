import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const locales = ['zh', 'en']

export function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const isZh = locale === 'zh'
  
  return {
    title: isZh ? 'SecureVault - 专业级macOS文件加密管理应用' : 'SecureVault - Professional macOS File Encryption Management App',
    description: isZh 
      ? 'SecureVault是一款专为macOS设计的企业级文件加密和管理应用，采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。'
      : 'SecureVault is an enterprise-grade file encryption and management app designed for macOS, using AES-256 military-grade encryption with Touch ID/Face ID support for bank-level security protection.',
    keywords: [
      'SecureVault',
      isZh ? 'macOS文件加密' : 'macOS file encryption',
      isZh ? '文件安全' : 'file security',
      'AES-256',
      'Touch ID',
      'Face ID',
      isZh ? '文件管理' : 'file management',
      isZh ? '数据保护' : 'data protection',
      isZh ? '隐私安全' : 'privacy security',
      isZh ? 'macOS应用' : 'macOS app',
      isZh ? '文件加密软件' : 'file encryption software',
      isZh ? '安全存储' : 'secure storage'
    ],
    authors: [{ name: 'SecureVault Team' }],
    creator: 'SecureVault Team',
    publisher: 'SecureVault',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://securevault.vercel.app'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'zh': '/zh',
        'en': '/en'
      }
    },
    openGraph: {
      title: isZh ? 'SecureVault - 专业级macOS文件加密管理应用' : 'SecureVault - Professional macOS File Encryption Management App',
      description: isZh 
        ? '采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。'
        : 'Using AES-256 military-grade encryption with Touch ID/Face ID support for bank-level security protection.',
      url: `https://securevault.vercel.app/${locale}`,
      siteName: 'SecureVault',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: isZh ? 'SecureVault - 专业级macOS文件加密管理应用' : 'SecureVault - Professional macOS File Encryption Management App',
        },
      ],
      locale: isZh ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? 'SecureVault - 专业级macOS文件加密管理应用' : 'SecureVault - Professional macOS File Encryption Management App',
      description: isZh 
        ? '采用AES-256军用级加密，支持Touch ID/Face ID，为您的重要文件提供银行级安全保护。'
        : 'Using AES-256 military-grade encryption with Touch ID/Face ID support for bank-level security protection.',
      images: ['/twitter-image.png'],
      creator: '@securevault',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound()
  }

  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-title" content="SecureVault" />
        <meta name="application-name" content="SecureVault" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        
        {/* Schema.org 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SecureVault",
              "description": locale === 'zh' 
                ? "专业级macOS文件加密管理应用，采用AES-256军用级加密，支持Touch ID/Face ID"
                : "Professional macOS file encryption management app with AES-256 military-grade encryption and Touch ID/Face ID support",
              "operatingSystem": "macOS 14.0+",
              "applicationCategory": "SecurityApplication",
              "offers": {
                "@type": "Offer",
                "price": "Commercial",
                "priceCurrency": "USD"
              },
              "downloadUrl": "https://github.com/jiayuqi7813/SecureVault/releases/",
              "softwareVersion": "1.0.1",
              "datePublished": "2024-01-01",
              "author": {
                "@type": "Organization",
                "name": "SecureVault Team"
              },
              "screenshot": "https://securevault.vercel.app/screenshot.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "156",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
