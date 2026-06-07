import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { education } from '../data/portfolio'
import { useTheme } from '../contexts/ThemeContext'

const Education = () => {
  const { theme } = useTheme()

  const bgClass = theme === 'dark' ? 'bg-dark-surface/70' : 'bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/40'
  const cardBgClass = theme === 'dark'
    ? 'bg-dark-bg/90'
    : 'bg-gradient-to-br from-white/95 via-white/95 to-slate-50/80'
  const borderClass = theme === 'dark' ? 'border-dark-border' : 'border-gray-300/70'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-gray-900'
  const textSecondaryClass = theme === 'dark' ? 'text-dark-text-secondary' : 'text-gray-700'
  const accentClass = theme === 'dark' ? 'text-dark-accent' : 'text-blue-600'

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4 drop-shadow-sm`}>
            Education
          </h2>
          <p className={`text-lg ${textSecondaryClass} max-w-2xl mx-auto leading-relaxed`}>
            Academic foundation that supports my software engineering, AI, and product-building work.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`${cardBgClass} border-2 ${borderClass} rounded-2xl p-8 shadow-xl`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-dark-surface' : 'bg-blue-50'} border ${borderClass}`}>
                    <GraduationCap className={`w-6 h-6 ${accentClass}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${textClass} mb-2`}>
                      {item.degree}
                    </h3>
                    <p className={`text-base font-medium ${textSecondaryClass}`}>
                      {item.school}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 md:text-right">
                  <p className={`text-sm font-semibold ${accentClass}`}>{item.duration}</p>
                  <p className={`text-sm ${textSecondaryClass}`}>{item.grade}</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className={`w-5 h-5 ${accentClass}`} />
                  <h4 className={`text-sm font-semibold uppercase tracking-wide ${textSecondaryClass}`}>
                    Relevant Coursework
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className={`px-4 py-2 rounded-lg border ${borderClass} ${theme === 'dark' ? 'bg-dark-surface text-dark-text-secondary' : 'bg-white text-gray-700'} text-sm font-medium`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
