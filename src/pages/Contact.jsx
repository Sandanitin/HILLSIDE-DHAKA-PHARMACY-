import React, { useState } from 'react'
import SEO from '@/components/SEO'
import ContactInfo from '@/components/ContactInfo'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `New Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ADate of Birth: ${formData.dateOfBirth}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:dhakapharma17014@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <SEO
        title="Contact Us — Hillside Dhaka Pharmacy"
        description="Contact Hillside Dhaka Pharmacy at 170-14 Hillside Avenue, Jamaica, NY. Call 718-526-2300. MON-SAT 10AM-7PM. Free delivery available."
        keywords="contact pharmacy, Jamaica NY pharmacy, 170-14 Hillside Avenue, pharmacy hours, phone number"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="section py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {t.hero.title} <span className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-white">
        <div className="section section-y">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder={t.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder={t.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder={t.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-slate-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.form.messageLabel} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                    placeholder={t.form.messagePlaceholder}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {t.form.submitButton}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t.assistance.title}</h2>
                <p className="text-lg text-slate-600 mb-2">{t.assistance.subtitle}</p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:7185262300"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-[color:var(--primary)]/10 rounded-full flex items-center justify-center text-[color:var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.assistance.phone}</p>
                    <p className="text-slate-600">718-526-2300</p>
                    <p className="text-slate-600">718-526-2399</p>
                  </div>
                </a>

                <a
                  href="mailto:dhakapharma17014@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-[color:var(--primary)]/10 rounded-full flex items-center justify-center text-[color:var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.assistance.email}</p>
                    <p className="text-slate-600">dhakapharma17014@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[color:var(--primary)]/10 rounded-full flex items-center justify-center text-[color:var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.assistance.address}</p>
                    <p className="text-slate-600">170-14 Hillside Avenue</p>
                    <p className="text-slate-600">Jamaica, NY 11432</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[color:var(--primary)]/10 rounded-full flex items-center justify-center text-[color:var(--primary)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.assistance.storeHours}</p>
                    <p className="text-slate-600">Mon-Sat: 10.00 am - 7.00 pm</p>
                    <p className="text-slate-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}