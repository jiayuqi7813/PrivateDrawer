'use client'

import { motion } from 'framer-motion'
import { 
  Download, 
  Github, 
  Apple, 
  Monitor, 
  Cpu, 
  HardDrive, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Shield,
  Star,
  Clock,
  Users,
  Zap
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DownloadPage() {
  const systemRequirements = [
    { icon: Apple, label: 'macOS 14.0 或更高版本', required: true },
    { icon: Cpu, label: 'Apple Silicon (M1/M2/M3) 或 Intel 处理器', required: true },
    { icon: HardDrive, label: '至少 100 MB 可用存储空间', required: true },
    { icon: Monitor, label: '1280x720 或更高分辨率显示器', required: false }
  ]

  const downloadOptions = [
    {
      title: 'GitHub Releases',
      description: '从官方PrivateDrawer仓库下载最新版本',
      icon: Github,
      url: 'https://github.com/jiayuqi7813/PrivateDrawer/releases/',
      primary: true,
      benefits: [
        '最新版本v1.0.1',
        '完整的版本历史和更新日志',
        '官方数字签名验证',
        '问题反馈和技术支持'
      ]
    },
    {
      title: '直接下载',
      description: '直接下载预编译的应用程序',
      icon: Download,
      url: 'https://github.com/jiayuqi7813/PrivateDrawer/releases/latest',
      primary: false,
      benefits: [
        '支持Intel和Apple Silicon',
        '一键下载安装',
        '快速开始使用',
        '自动检查更新'
      ]
    }
  ]

  const installationSteps = [
    {
      step: 1,
      title: '下载安装包',
      description: '从上方选择合适的下载方式，下载 PrivateDrawer.dmg 安装包。',
      icon: Download
    },
    {
      step: 2,
      title: '打开安装包',
      description: '双击下载的 .dmg 文件，等待磁盘映像挂载完成。',
      icon: Monitor
    },
    {
      step: 3,
      title: '拖拽安装',
      description: '将PrivateDrawer应用拖拽到应用程序文件夹中。',
      icon: Apple
    },
    {
      step: 4,
      title: '首次启动',
      description: '在应用程序文件夹中找到PrivateDrawer，双击启动并完成初始设置。',
      icon: Zap
    }
  ]

  const securityNotice = [
    '应用已通过Apple公证(Notarization)，确保安全可信',
    '使用官方Apple开发者证书签名',
    '支持macOS Gatekeeper安全检查',
    '商业级安全保障，专业技术支持'
  ]

  const stats = [
    { number: '50,000+', label: '下载次数', icon: Users },
    { number: '4.9/5', label: '用户评分', icon: Star },
    { number: '99.9%', label: '稳定性', icon: Shield },
    { number: '24h', label: '支持响应', icon: Clock }
  ]

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
              下载
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PrivateDrawer
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              专业商业产品，立即开始保护您的重要文件
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              选择下载方式
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              推荐从GitHub下载以获得最新版本和完整功能
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {downloadOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                  option.primary 
                    ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {option.primary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      推荐
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <option.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    option.primary
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  立即下载
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              系统要求
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              确保您的系统满足以下要求以获得最佳体验
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {systemRequirements.map((req, index) => (
                <div key={index} className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <req.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {req.label}
                    </span>
                    {req.required && (
                      <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        必需
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              安装指南
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              简单四步，快速安装私密抽屉
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl mr-6 flex-shrink-0 font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg ml-4">
                  <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">
                安全保证
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityNotice.map((notice, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-green-800 dark:text-green-200 text-sm">
                    {notice}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              遇到问题？
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              查看常见问题解决方案或联系我们获取帮助
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl mr-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                常见问题
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  "应用已损坏，无法打开" 错误
                </h4>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  在终端中运行：<code className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded">sudo xattr -rd com.apple.quarantine /Applications/PrivateDrawer.app</code>
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Touch ID 无法使用
                </h4>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  检查系统偏好设置 → Touch ID 中是否已启用，并确保应用具有必要权限。
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  需要更多帮助？访问我们的 
                  <a href="/docs" className="underline hover:text-amber-600 dark:hover:text-amber-300">
                    文档中心
                  </a> 或 
                  <a href="/support" className="underline hover:text-amber-600 dark:hover:text-amber-300">
                    联系技术支持
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
