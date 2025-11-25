import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { useTranslations } from '../utils/translationHelpers'

export default function Prescriptions() {
  const t = useTranslations('prescriptions')
  return (
    <>
      <SEO
        title="Prescription Services — Hillside Dhaka Pharmacy"
        description="Fast prescription filling in 10-15 minutes, free transfers, medication synchronization, automatic refill reminders. Most insurances accepted. Walk-ins welcome."
        keywords="prescription filling, medication transfer, prescription refills, Jamaica NY pharmacy, fast prescriptions"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {t.hero?.title || 'Prescription'} <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">{t.hero?.titleHighlight || 'Services'}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t.hero?.subtitle || 'Fast, accurate prescription filling with personalized service. Most prescriptions ready in 10-15 minutes.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className=" bg-white">
        <div className="section section-y">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: '⚡' },
              { icon: '🔄' },
              { icon: '📅' },
              { icon: '🔔' },
              { icon: '📋' },
              { icon: '💊' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.services?.[i]?.title || ''}</h3>
                <p className="text-slate-600 leading-relaxed">{t.services?.[i]?.description || ''}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">{t.insurance?.title || '✓ We Accept Most Insurances'}</h2>
              <p className="text-lg mb-6 text-white/90">
                {t.insurance?.subtitle || 'We accept Medicaid, Medicare Part D, and most private insurance plans.'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {(t.insurance?.plans || ['Medicaid', 'Medicare Part D', 'Private Insurance', 'Cash Pay Options']).map((plan, i) => (
                  <div key={i} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">{plan}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.cta?.title || 'Ready to Transfer Your Prescriptions?'}</h2>
          <p className="text-xl text-slate-600 mb-8">{t.cta?.subtitle || 'We make it easy and hassle-free'}</p>
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