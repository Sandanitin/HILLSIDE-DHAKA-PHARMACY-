// Simple translation helper hook
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from './translations'

export const useTranslations = (page) => {
    const { language } = useLanguage()
    return translations[language][page] || {}
}

// Translation component wrapper
export const T = ({ path, fallback }) => {
    const { language } = useLanguage()

    const getValue = (obj, path) => {
        return path.split('.').reduce((current, key) => current?.[key], obj) || fallback
    }

    return getValue(translations[language], path) || fallback
}
