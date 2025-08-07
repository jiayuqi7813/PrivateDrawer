'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Fingerprint, 
  FileText, 
  Cloud, 
  Smartphone, 
  Download, 
  Star, 
  Github,
  CheckCircle,
  Zap,
  Eye,
  Users,
  Award,
  ChevronRight,
  Play,
  AlertCircle
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const { locale, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const features = [
    {
      icon: Shield,
      title: t('features.encryption.title'),
      description: t('features.encryption.description'),
      highlight: t('features.encryption.highlight')
    },
    {
      icon: Fingerprint,
      title: t('features.biometric.title'),
      description: t('features.biometric.description'),
      highlight: t('features.biometric.highlight')
    },
    {
      icon: Lock,
      title: t('features.autoLock.title'),
      description: t('features.autoLock.description'),
      highlight: t('features.autoLock.highlight')
    },
    {
      icon: Cloud,
      title: t('features.cloudBackup.title'),
      description: t('features.cloudBackup.description'),
      highlight: t('features.cloudBackup.highlight')
    },
    {
      icon: Eye,
      title: t('features.preview.title'),
      description: t('features.preview.description'),
      highlight: t('features.preview.highlight')
    },
    {
      icon: Zap,
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      highlight: t('features.performance.highlight')
    }
  ]

  const stats = [
    { number: '50,000+', label: t('stats.users') },
    { number: '99.9%', label: t('stats.security') },
    { number: '10TB+', label: t('stats.protected') },
    { number: '4.9/5', label: t('stats.rating') }
  ]

  const testimonials = [
    {
      name: t('testimonials.user1.name'),
      role: t('testimonials.user1.role'),
      content: t('testimonials.user1.content'),
      rating: 5
    },
    {
      name: t('testimonials.user2.name'),
      role: t('testimonials.user2.role'),
      content: t('testimonials.user2.content'),
      rating: 5
    },
    {
      name: t('testimonials.user3.name'),
      role: t('testimonials.user3.role'),
      content: t('testimonials.user3.content'),
      rating: 5
    }
  ]

  const pricingFeatures = t('pricing.features', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Development Notice for English */}
      {locale === 'en' && (
        <motion.div 
          className="fixed top-0 left-0 right-0 z-50 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 py-3 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <p className="text-amber-800 dark:text-amber-200 text-sm font-medium text-center">
              {t('developmentNotice.message')}
            </p>
          </div>
        </motion.div>
      )}
      
      <Header />
      
      {/* Hero Section */}
      <section className={`relative pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        locale === 'en' ? 'pt-32' : 'pt-20'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4 mr-2" />
              {t('hero.award')}
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('hero.title')}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="https://github.com/jiayuqi7813/SecureVault/releases/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('hero.downloadBtn')}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                {t('hero.demoBtn')}
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('pricing.productName')}</h3>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{t('pricing.price')}</div>
              <p className="text-gray-600 dark:text-gray-400">{t('pricing.priceDesc')}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {pricingFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://github.com/jiayuqi7813/SecureVault/releases/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center block"
            >
              {t('pricing.downloadBtn')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://github.com/jiayuqi7813/SecureVault/releases/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('cta.downloadBtn')}
              </a>
              
              <a 
                href="https://github.com/jiayuqi7813/SecureVault/releases/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 transition-all duration-300 flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                {t('cta.githubBtn')}
              </a>
            </div>
            
            <p className="text-blue-100 text-sm mt-6">
              {t('cta.requirements')}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
