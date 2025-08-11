'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Shield, Lock, Zap, Globe, Heart, Code, Users, Building } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface FAQItem {
  id: string
  question: string
  answer: string
  icon?: React.ReactNode
  category: string
}

export default function FAQPage() {
  const { t, translations } = useLanguage()
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories = [
    { id: 'all', name: t('faq.categories.all'), icon: <Globe className="w-4 h-4" /> },
    { id: 'general', name: t('faq.categories.general'), icon: <Users className="w-4 h-4" /> },
    { id: 'security', name: t('faq.categories.security'), icon: <Shield className="w-4 h-4" /> },
    { id: 'technical', name: t('faq.categories.technical'), icon: <Code className="w-4 h-4" /> },
    { id: 'business', name: t('faq.categories.business'), icon: <Building className="w-4 h-4" /> }
  ]

  const faqData: FAQItem[] = translations.faq?.items || []
  
  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'general': return <Users className="w-5 h-5" />
      case 'security': return <Shield className="w-5 h-5" />
      case 'technical': return <Code className="w-5 h-5" />
      case 'business': return <Building className="w-5 h-5" />
      default: return <Globe className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              {t('faq.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        item.category === 'security' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                        item.category === 'technical' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                        item.category === 'business' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                        'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {item.question}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {t(`faq.categories.${item.category}`)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="ml-16 pt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-500 dark:text-gray-400">
                <Globe className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">{t('faq.noResults')}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
          >
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t('faq.contact.title')}</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('faq.contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/jiayuqi7813/PrivateDrawer/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <Code className="w-4 h-4 mr-2" />
                {t('faq.contact.githubIssues')}
              </a>
              <a
                href="https://afdian.com/a/snowywar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors duration-300"
              >
                <Heart className="w-4 h-4 mr-2" />
                {t('faq.contact.sponsor')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


