import React from 'react'
import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'
import { useTranslations } from '../utils/translationHelpers'

export default function About() {
  const t = useTranslations('about')
  return (
    <>
      <SEO
        title="About Us — Hillside Dhaka Pharmacy"
        description="Learn about Hillside Dhaka Pharmacy, your trusted community pharmacy serving Jamaica, NY. Family-owned, personalized care, and commitment to health."
        keywords="about Hillside Dhaka Pharmacy, Jamaica NY pharmacy, community pharmacy, Bengali pharmacy"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {t.hero?.title || 'About'} <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">{t.hero?.titleHighlight || 'Us'}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.hero?.subtitle || 'Your trusted neighborhood pharmacy, serving the Jamaica community with care and dedication'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.story?.title || 'Our Story'}</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {(t.story?.paragraphs || []).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1200&auto=format&fit=crop"
                  alt="Pharmacy interior with friendly staff"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.values?.title || 'Our Values'}</h2>
            <p className="text-xl text-slate-600">{t.values?.subtitle || 'What drives us every day'}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '❤️' },
              { icon: '🎯' },
              { icon: '🤝' },
              { icon: '💡' },
              { icon: '⏰' },
              { icon: '🌟' }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.values?.items?.[i]?.title || ''}</h3>
                <p className="text-slate-600 leading-relaxed">{t.values?.items?.[i]?.description || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.whyChoose?.title || 'Why Choose Hillside Dhaka Pharmacy?'}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.whyChoose?.subtitle || 'We go above and beyond to ensure you receive the best pharmaceutical care'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {(t.whyChoose?.features || []).map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-white rounded-lg border border-slate-200">
                <div className="text-2xl text-[color:var(--primary)]">✓</div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="section py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta?.title || 'Visit Us Today'}</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            {t.cta?.subtitle || 'Experience the difference of personalized pharmacy care'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t.cta?.contactUs || 'Contact Us'}
            </Link>
            <a
              href="tel:7185262300"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              📞 718-526-2300
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
