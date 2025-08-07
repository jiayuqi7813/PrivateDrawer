'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Fingerprint, 
  Cloud, 
  Zap, 
  Eye, 
  FileText, 
  Tag, 
  Search, 
  Trash2,
  RotateCcw,
  Activity,
  Keyboard,
  Smartphone,
  Monitor,
  Download,
  Upload,
  Settings,
  CheckCircle
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Features() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'AES-256 军用级加密',
      description: '采用美国国家安全局认证的AES-256-GCM加密算法，提供最高级别的文件安全保护。',
      details: [
        '256位密钥长度，理论上需要数十亿年才能破解',
        'GCM模式提供身份验证和完整性保护',
        '符合FIPS 140-2标准，政府级安全认证',
        '密钥随机生成，每个文件独立加密'
      ]
    },
    {
      icon: Fingerprint,
      title: 'Touch ID / Face ID 支持',
      description: '无缝集成macOS生物识别技术，既安全又便捷的身份验证体验。',
      details: [
        '支持Touch ID指纹识别（MacBook Pro/Air）',
        '支持Face ID面部识别（配备TrueDepth摄像头的Mac）',
        '生物识别数据安全存储在Secure Enclave中',
        '可配置多因子认证（密码+生物识别）'
      ]
    },
    {
      icon: Lock,
      title: '智能自动锁定',
      description: '可配置的智能锁定机制，在无操作时自动保护您的文件安全。',
      details: [
        '可设置1分钟到24小时的锁定时间',
        '检测鼠标/键盘活动，智能判断用户状态',
        '锁定时自动清理内存中的敏感数据',
        '屏幕保护程序激活时自动锁定'
      ]
    }
  ]

  const fileManagementFeatures = [
    {
      icon: FileText,
      title: '全格式文件支持',
      description: '支持几乎所有常见文件格式的加密存储和预览。',
      details: [
        '文档：.txt, .docx, .pdf, .pages, .rtf',
        '图片：.jpg, .png, .gif, .svg, .webp, .heic',
        '视频：.mp4, .mov, .avi, .mkv, .webm',
        '音频：.mp3, .aac, .wav, .flac, .m4a'
      ]
    },
    {
      icon: Tag,
      title: '智能标签管理',
      description: '为文件添加多个标签，实现灵活的分类和组织。',
      details: [
        '支持自定义标签颜色和图标',
        '标签自动补全和智能建议',
        '按标签快速筛选和查找文件',
        '标签统计和使用频率分析'
      ]
    },
    {
      icon: Search,
      title: '强大搜索功能',
      description: '全文搜索和智能筛选，快速找到您需要的文件。',
      details: [
        '按文件名、标签、类型搜索',
        '支持正则表达式和通配符',
        '搜索历史记录和快速访问',
        '智能搜索建议和纠错'
      ]
    }
  ]

  const userInterfaceFeatures = [
    {
      icon: Monitor,
      title: '现代化界面设计',
      description: '基于最新SwiftUI技术构建的现代化用户界面。',
      details: [
        '遵循Apple Human Interface Guidelines',
        '支持系统深色/浅色模式切换',
        '可调节窗口透明度和背景模糊',
        '响应式布局适配不同屏幕尺寸'
      ]
    },
    {
      icon: Eye,
      title: '安全预览系统',
      description: '无需解密到临时文件即可预览各种格式的文件内容。',
      details: [
        '内存中实时解密预览',
        '支持文档、图片、视频预览',
        '预览时不在磁盘留下痕迹',
        '快速缩略图生成和缓存'
      ]
    },
    {
      icon: Settings,
      title: '丰富个性化设置',
      description: '提供丰富的个性化设置选项，打造专属的使用体验。',
      details: [
        '界面主题和外观自定义',
        '安全策略和锁定时间配置',
        '文件导入和处理偏好设置',
        '快捷键和手势自定义'
      ]
    }
  ]

  const backupFeatures = [
    {
      icon: Cloud,
      title: 'iCloud 安全备份',
      description: '加密数据同步到iCloud，多设备访问，永不丢失。',
      details: [
        '端到端加密，Apple也无法访问您的数据',
        '增量备份，节省存储空间和时间',
        '多设备同步，数据实时更新',
        '备份版本管理，可恢复历史版本'
      ]
    },
    {
      icon: Download,
      title: '本地备份导出',
      description: '创建加密的本地备份文件，完全掌控您的数据。',
      details: [
        '一键导出所有数据到加密备份文件',
        '备份文件同样使用AES-256加密',
        '可选择备份位置和命名规则',
        '定期自动备份和备份提醒'
      ]
    },
    {
      icon: Upload,
      title: '一键数据恢复',
      description: '从备份文件快速恢复数据，简单可靠。',
      details: [
        '支持从本地和iCloud备份恢复',
        '选择性恢复，可指定恢复内容',
        '恢复前数据冲突检测和处理',
        '恢复进度实时显示'
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: Trash2,
      title: '安全回收站',
      description: '误删文件可恢复，但删除记录完全可追踪。',
      details: [
        '删除的文件暂存在回收站中',
        '可设置回收站自动清理时间',
        '永久删除前的二次确认',
        '删除操作记录在活动日志中'
      ]
    },
    {
      icon: Activity,
      title: '详细操作日志',
      description: '记录所有文件操作，提供完整的审计追踪。',
      details: [
        '记录文件的创建、修改、删除操作',
        '显示操作时间、类型和详细信息',
        '支持日志导出和分析',
        '可配置日志保留时间'
      ]
    },
    {
      icon: Keyboard,
      title: '丰富快捷键支持',
      description: '提供全面的快捷键支持，提高操作效率。',
      details: [
        '⌘+L 快速锁定应用',
        '⌘+F 搜索文件',
        '⌘+N 导入新文件',
        '⌘+, 打开偏好设置'
      ]
    }
  ]

  const FeatureSection = ({ 
    title, 
    description, 
    features, 
    className = "" 
  }: {
    title: string
    description: string
    features: any[]
    className?: string
  }) => (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.details.map((detail: string, detailIndex: number) => (
                  <li key={detailIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              强大的
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                功能特性
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              深入了解私密抽屉的每一个功能，感受专业级文件安全管理的强大能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <FeatureSection
        title="顶级安全保护"
        description="采用军用级加密技术，为您的文件提供银行级安全保护"
        features={securityFeatures}
        className="bg-white/50 dark:bg-gray-900/50 backdrop-blur"
      />

      {/* File Management Features */}
      <FeatureSection
        title="智能文件管理"
        description="全格式支持，智能标签分类，让文件管理变得轻松高效"
        features={fileManagementFeatures}
      />

      {/* User Interface Features */}
      <FeatureSection
        title="现代化用户体验"
        description="精美的界面设计与强大的功能完美结合，带来愉悦的使用体验"
        features={userInterfaceFeatures}
        className="bg-white/50 dark:bg-gray-900/50 backdrop-blur"
      />

      {/* Backup Features */}
      <FeatureSection
        title="可靠数据备份"
        description="多重备份策略，确保您的重要数据永不丢失"
        features={backupFeatures}
      />

      {/* Additional Features */}
      <FeatureSection
        title="贴心实用功能"
        description="丰富的辅助功能，让您的文件管理工作更加便捷高效"
        features={additionalFeatures}
        className="bg-white/50 dark:bg-gray-900/50 backdrop-blur"
      />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              体验完整功能
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              立即下载私密抽屉，感受专业级文件安全管理的强大功能
            </p>
            
            <motion.button
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              免费下载
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
