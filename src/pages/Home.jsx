import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { useTranslations } from '../utils/translationHelpers'

export default function Home() {
  const t = useTranslations('home')
  return (
    <>
      <SEO
        title="Hillside Dhaka Pharmacy — Your Local Pharmacy in Jamaica, NY"
        description="Community pharmacy in Jamaica, NY serving for many years. Fast prescription filling, free delivery, immunizations & health services. MON-SAT 10AM-7PM. Walk-ins welcome at 17014 Hillside Ave."
        keywords="Hillside Dhaka Pharmacy, Jamaica NY pharmacy, Bengali pharmacy, prescription filling, immunizations, flu shots, free delivery, local pharmacy, Queens pharmacy, 17014 Hillside Ave"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)]/5 via-transparent to-[color:var(--accent)]/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[color:var(--primary)]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[color:var(--accent)]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="bg-transparent">
          <div className="section section-y grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-sm font-medium text-slate-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {t.hero?.badge || 'Serving the Neighborhood for Many Years'}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {t.hero?.title || 'Your Local'}{' '}
                <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">
                  {t.hero?.titleHighlight || 'Pharmacy'}
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                {t.hero?.subtitle || 'Fast, friendly, and reliable service. Free home delivery, expert medication counseling, and personalized care for our community in Jamaica, NY.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t.hero?.ctaContact || 'Contact Us'}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all duration-200"
                >
                  {t.hero?.ctaServices || 'Our Services'}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--primary)]/20 to-[color:var(--accent)]/20 rounded-2xl blur-xl"></div>
                <img
                  src="/images/4b9a7b8ab18ba1ced90d9fa6a0172833.jpg"
                  alt="Hillside Dhaka Pharmacy storefront and friendly pharmacist"
                  className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-slate-200"
                  fetchpriority="high"
                  decoding="async"
                  width="1600"
                  height="1200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-y border-slate-200">
        <div className="section py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">{t.trustBar?.prescriptionTime || '10-15 min'}</p>
                <p className="text-sm text-slate-600 font-medium">{t.trustBar?.prescriptionLabel || 'Prescription Ready'}</p>
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-50 mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">{t.trustBar?.deliveryLabel || 'Free'}</p>
                <p className="text-sm text-slate-600 font-medium">{t.trustBar?.deliverySubLabel || 'Home Delivery'}</p>
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">{t.trustBar?.staffLabel || 'Multilingual'}</p>
                <p className="text-sm text-slate-600 font-medium">{t.trustBar?.staffSubLabel || 'Staff Available'}</p>
              </div>
            </div>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-slate-900">{t.trustBar?.insuranceLabel || 'Most'}</p>
                <p className="text-sm text-slate-600 font-medium">{t.trustBar?.insuranceSubLabel || 'Insurance Accepted'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gradient-to-br from-slate-50 to-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.services?.title || 'Our Services'}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.services?.subtitle || 'Comprehensive pharmacy services designed to keep you healthy and well.'}</p>
            <Link to="/services" className="inline-flex items-center mt-6 text-[color:var(--primary)] hover:text-[color:var(--primary-hover)] font-semibold">
              {t.services?.viewAll || 'View all services'}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: '/services/prescriptions',
                icon: '💊',
                color: 'from-blue-500 to-blue-600'
              },
              {
                href: '/services/immunizations',
                icon: '💉',
                color: 'from-green-500 to-green-600'
              },
              {
                href: '/services/clinical-services',
                icon: '🩺',
                color: 'from-purple-500 to-purple-600'
              },
              {
                href: '/services/specialty-services',
                icon: '⚕️',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((card, idx) => (
              <Link key={idx} to={card.href} className="group relative">
                <div className="relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-2xl rounded-tr-2xl"></div>
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} text-white text-2xl mb-6 shadow-lg`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[color:var(--primary)] transition-colors duration-200">{t.services?.cards?.[idx]?.title || ''}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{t.services?.cards?.[idx]?.body || ''}</p>
                    <div className="flex items-center text-[color:var(--primary)] font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      {t.services?.cards?.[idx]?.learnMore || 'Learn more'}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{t.whyChoose?.title || 'Why Choose Hillside Dhaka Pharmacy'}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.whyChoose?.subtitle || "We're more than just a pharmacy — we're your healthcare partner in the community."}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚚' },
              { icon: '⚡' },
              { icon: '🌐' },
              { icon: '💰' },
              { icon: '👨‍⚕️' },
              { icon: '🏘️' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-[color:var(--primary)]/20 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.whyChoose?.features?.[i]?.title || ''}</h3>
                <p className="text-slate-600 leading-relaxed">{t.whyChoose?.features?.[i]?.description || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1920&auto=format&fit=crop"
            alt="Pharmacy interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)]/30 to-[color:var(--accent)]/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[color:var(--primary)]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[color:var(--accent)]/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative section py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.cta?.title || 'Visit Us Today'}</h2>
          <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
            17014 Hillside Ave, Jamaica, NY 11432
          </p>
          <p className="text-lg text-slate-300 mb-8">
            MON-SAT: 10:00 AM - 7:00 PM  •  SUN: CLOSED
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/nRggx5KFKW3jUb3K7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.cta?.getDirections || 'Get Directions'}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-8">
            <a href="tel:7185262300" className="text-2xl font-bold text-white hover:text-[color:var(--accent)] transition-colors">
              📞 718-526-2300
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
