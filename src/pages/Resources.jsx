import React from 'react'
import SEO from '@/components/SEO'
import { useTranslations } from '../utils/translationHelpers'

export default function Resources() {
  const t = useTranslations('resources')
  return (
    <>
      <SEO
        title="Health Tips & Resources — Hillside Dhaka Pharmacy"
        description="Health tips, medication safety information, and wellness advice from Hillside Dhaka Pharmacy in Jamaica, NY."
        keywords="health tips, medication safety, wellness advice, pharmacy resources, health information"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {t.hero?.title || 'Health Tips &'} <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">{t.hero?.titleHighlight || 'Resources'}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.hero?.subtitle || 'Helpful information to keep you and your family healthy'}
            </p>
          </div>
        </div>
      </section>

      {/* Medication Safety */}
      <section className="bg-white">
        <div className="section section-y">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.medicationSafety?.title || 'Medication Safety Tips'}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {(t.medicationSafety?.sections || []).map((section, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💊</span>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[color:var(--primary)] mt-1">✓</span>
                      <span className="text-slate-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Health */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t.seasonalHealth?.title || 'Seasonal Health Tips'}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🍂' },
              { icon: '🌸' },
              { icon: '☀️' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{t.seasonalHealth?.seasons?.[i]?.season || ''}</h3>
                <ul className="space-y-2">
                  {(t.seasonalHealth?.seasons?.[i]?.tips || []).map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-[color:var(--primary)]">•</span>
                      <span className="text-slate-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Health Conditions */}
      <section className="bg-white">
        <div className="section section-y">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.commonConditions?.title || 'Managing Common Conditions'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🩸' },
              { icon: '❤️' },
              { icon: '🫁' },
              { icon: '🤧' },
              { icon: '🦴' },
              { icon: '💓' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{t.commonConditions?.conditions?.[i]?.condition || ''}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{t.commonConditions?.conditions?.[i]?.tips || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta?.title || 'Have Health Questions?'}</h2>
          <p className="text-xl text-white/90 mb-8">
            {t.cta?.subtitle || 'Our licensed pharmacists are here to help with free consultations'}
          </p>
          <a
            href="tel:7185262300"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[color:var(--primary)] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            📞 {t.cta?.callUs || 'Call Us: 718-526-2300'}
          </a>
        </div>
      </section>
    </>
  )
}