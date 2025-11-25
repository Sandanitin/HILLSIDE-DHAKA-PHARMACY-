import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link } from 'react-router-dom';

export default function Careers() {
    const { language } = useLanguage();
    const t = translations[language].careers || {
        hero: {
            title: 'Careers',
            subtitle: 'Join our team at Hillside Dhaka Pharmacy'
        },
        about: {
            title: 'Why Work With Us?',
            subtitle: 'Be part of a healthcare team that makes a real difference in Jamaica, NY',
            description: 'At Hillside Dhaka Pharmacy, we\'re more than just a pharmacy – we\'re a healthcare family dedicated to serving our community with compassion, expertise, and personalized care.'
        },
        benefits: {
            title: 'Benefits & Perks',
            items: [
                'Competitive salary and benefits package',
                'Health, dental, and vision insurance',
                'Paid time off and holidays',
                'Professional development opportunities',
                'Flexible scheduling options',
                'Employee discounts on prescriptions and products',
                'Supportive team environment',
                'Career advancement opportunities'
            ]
        },
        positions: {
            title: 'Current Openings',
            subtitle: 'Join our growing team of healthcare professionals',
            items: [
                {
                    title: 'Pharmacist',
                    type: 'Full-Time',
                    description: 'Licensed pharmacist responsible for dispensing medications, providing patient counseling, and ensuring quality pharmaceutical care.'
                },
                {
                    title: 'Pharmacy Technician',
                    type: 'Full-Time/Part-Time',
                    description: 'Assist pharmacists in preparing and dispensing medications, managing inventory, and providing excellent customer service.'
                },
                {
                    title: 'Customer Service Representative',
                    type: 'Part-Time',
                    description: 'Front desk position handling customer inquiries, prescription drop-offs, and providing friendly service to our patients.'
                },
                {
                    title: 'Delivery Driver',
                    type: 'Part-Time',
                    description: 'Responsible for timely and safe delivery of prescriptions and medical supplies to our community members.'
                }
            ]
        },
        culture: {
            title: 'Our Culture',
            subtitle: 'A workplace where you can grow and make a difference',
            values: [
                {
                    title: 'Community First',
                    description: 'We prioritize the health and well-being of our Jamaica, NY community above all else.'
                },
                {
                    title: 'Excellence in Care',
                    description: 'We maintain the highest standards of pharmaceutical care and customer service.'
                },
                {
                    title: 'Team Collaboration',
                    description: 'We work together to provide the best possible outcomes for our patients.'
                },
                {
                    title: 'Continuous Learning',
                    description: 'We encourage ongoing education and professional development for all team members.'
                }
            ]
        },
        description: 'Explore opportunities to work with us and make a difference in the community.',
        contactUs: 'Contact Us',
        applyNow: 'Apply Now'
    };

    const handleApplyNow = (position) => {
        const subject = `Job Application: ${position.title} - ${position.type}`;
        const body = `I am interested in applying for the ${position.title} position (${position.type}) at Hillside Dhaka Pharmacy.%0D%0A%0D%0APlease let me know the next steps in the application process.%0D%0A%0D%0AThank you!`;
        window.location.href = `mailto:dhakapharma17014@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleViewAllPositions = () => {
        const positionsSection = document.getElementById('positions');
        if (positionsSection) {
            positionsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <SEO
                title={t.hero.title}
                description={t.hero.subtitle}
            />
            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
                <div className="section max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                        {t.hero.title}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white py-16">
                <div className="section max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.title}</h2>
                            <p className="text-lg text-slate-600 mb-6">{t.about.subtitle}</p>
                            <p className="text-slate-700 leading-relaxed">{t.about.description}</p>
                        </div>
                        <div className="bg-slate-100 rounded-xl p-8 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-[color:var(--primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-12 h-12 text-[color:var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-slate-600 font-medium">Join Our Healthcare Family</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Positions */}
            <section id="positions" className="bg-slate-50 py-16">
                <div className="section max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.positions.title}</h2>
                        <p className="text-lg text-slate-600">{t.positions.subtitle}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {t.positions.items.map((position, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-slate-900">{position.title}</h3>
                                    <span className="px-3 py-1 bg-[color:var(--primary)]/10 text-[color:var(--primary)] rounded-full text-sm font-medium">
                                        {position.type}
                                    </span>
                                </div>
                                <p className="text-slate-600 mb-4">{position.description}</p>
                                <button 
                                    onClick={() => handleApplyNow(position)}
                                    className="px-6 py-2 bg-[color:var(--primary)] text-white rounded-lg hover:opacity-90 transition"
                                >
                                    {t.applyNow}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-white py-16">
                <div className="section max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.benefits.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.benefits.items.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[color:var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-[color:var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-slate-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture */}
            <section className="bg-gradient-to-br from-slate-50 to-white py-16">
                <div className="section max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.culture.title}</h2>
                        <p className="text-lg text-slate-600">{t.culture.subtitle}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.culture.values.map((value, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="w-12 h-12 bg-[color:var(--accent)]/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-16">
                <div className="section max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Join Our Team?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        {t.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            {t.contactUs}
                        </Link>
                        <button 
                            onClick={handleViewAllPositions}
                            className="inline-block px-8 py-4 border-2 border-[color:var(--primary)] text-[color:var(--primary)] font-semibold rounded-xl hover:bg-[color:var(--primary)] hover:text-white transition-all duration-200"
                        >
                            View All Positions
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
