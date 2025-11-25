import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const navLinkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-[color:var(--primary)]' : 'text-[color:var(--text)] hover:text-[color:var(--primary)]'}`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200" aria-label="Primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" aria-label="Home">
              <img src="/images/logo.png" alt="Hillside Dhaka Pharmacy logo" className="h-10 w-auto md:h-12" loading="lazy" />
              {/* <div className="leading-tight">
                <span className="font-bold text-[color:var(--primary)] text-base md:text-lg block tracking-wide">HILLSIDE DHAKA</span>
                <span className="block text-xs md:text-sm text-slate-600 font-semibold tracking-widest">PHARMACY</span>
              </div> */}
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <div className="relative group">
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <div className="absolute left-0 mt-2 hidden group-hover:block min-w-[220px] rounded-md border border-slate-200 bg-white shadow-lg py-2 z-50">
                <NavLink to="/services/prescriptions" className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-white bg-[color:var(--primary)]' : 'text-[color:var(--text)] hover:bg-slate-50'}`}>Prescriptions</NavLink>
                <NavLink to="/services/immunizations" className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-white bg-[color:var(--primary)]' : 'text-[color:var(--text)] hover:bg-slate-50'}`}>Immunizations</NavLink>
                <NavLink to="/services/clinical-services" className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-white bg-[color:var(--primary)]' : 'text-[color:var(--text)] hover:bg-slate-50'}`}>Clinical Services</NavLink>
                <NavLink to="/services/specialty-services" className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-white bg-[color:var(--primary)]' : 'text-[color:var(--text)] hover:bg-slate-50'}`}>Specialty Services</NavLink>
              </div>
            </div>
            <NavLink to="/health-resources" className={navLinkClass}>Health Tips</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium bg-[color:var(--primary)] text-white hover:opacity-90 transition-opacity"
              aria-label={`Switch to ${language === 'en' ? 'Bengali' : 'English'}`}
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>

            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/" className={navLinkClass} end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>Services</NavLink>
            <div className="pl-4 space-y-1">
              <NavLink to="/services/prescriptions" className={navLinkClass} onClick={() => setOpen(false)}>Prescriptions</NavLink>
              <NavLink to="/services/immunizations" className={navLinkClass} onClick={() => setOpen(false)}>Immunizations</NavLink>
              <NavLink to="/services/clinical-services" className={navLinkClass} onClick={() => setOpen(false)}>Clinical Services</NavLink>
              <NavLink to="/services/specialty-services" className={navLinkClass} onClick={() => setOpen(false)}>Specialty Services</NavLink>
            </div>
            <NavLink to="/health-resources" className={navLinkClass} onClick={() => setOpen(false)}>Health Tips</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
