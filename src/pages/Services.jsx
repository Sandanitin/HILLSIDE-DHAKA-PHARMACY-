import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { useTranslations } from '../utils/translationHelpers'

export default function Services() {
  const t = useTranslations('services')
  return (
    <>
      <SEO
        title="Our Services — Hillside Dhaka Pharmacy"
        description="Comprehensive pharmacy services including prescriptions, immunizations, clinical services, and specialty offerings. Serving Jamaica, NY."
        keywords="pharmacy services, prescriptions, immunizations, vaccines, health services, Jamaica NY"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {t.hero?.title || 'Our'} <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">{t.hero?.titleHighlight || 'Services'}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.hero?.subtitle || 'Comprehensive pharmacy services designed to keep you and your family healthy'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: '💊',
                color: 'from-blue-500 to-blue-600',
                href: '/services/prescriptions'
              },
              {
                icon: '💉',
                color: 'from-green-500 to-green-600',
                href: '/services/immunizations'
              },
              {
                icon: '🩺',
                color: 'from-purple-500 to-purple-600',
                href: '/services/clinical-services'
              },
              {
                icon: '⚕️',
                color: 'from-orange-500 to-orange-600',
                href: '/services/specialty-services'
              }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-2xl font-bold">{t.serviceCards?.[i]?.title || ''}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {(t.serviceCards?.[i]?.features || []).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[color:var(--primary)] mt-1">✓</span>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-[color:var(--primary)] font-semibold hover:translate-x-1 transition-transform duration-200"
                  >
                    {t.serviceCards?.[i]?.learnMore || 'Learn more'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.additional?.title || 'Additional Services'}</h2>
            <p className="text-xl text-slate-600">{t.additional?.subtitle || 'Even more ways we can help you'}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚚' },
              { icon: '🌐' },
              { icon: '💰' },
              { icon: '🏥' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{t.additional?.items?.[i]?.title || ''}</h4>
                <p className="text-sm text-slate-600">{t.additional?.items?.[i]?.desc || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.cta?.title || 'Ready to Experience Better Pharmacy Care?'}</h2>
          <p className="text-xl text-slate-600 mb-8">{t.cta?.subtitle || 'Visit us or call today'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t.cta?.contactUs || 'Contact Us'}
            </Link>
            <a
              href="tel:7185262300"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-[color:var(--primary)] transition-all duration-200"
            >
              📞 718-526-2300
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
