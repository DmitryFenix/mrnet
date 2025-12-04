'use client'

import { useState, FormEvent } from 'react'
import type { FormData, FormErrors } from '@/types/form'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contacts: '',
    phone: '',
    inn: '',
    consent: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Валидация телефона (российский формат)
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?7[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length === 11 && (digitsOnly.startsWith('7') || digitsOnly.startsWith('8'))
  }

  // Валидация ИНН (10 или 12 цифр)
  const validateINN = (inn: string): boolean => {
    const innRegex = /^\d{10}$|^\d{12}$/
    return innRegex.test(inn.replace(/\s/g, ''))
  }

  // Форматирование телефона
  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    if (digits.startsWith('8')) {
      return '+7' + digits.slice(1)
    }
    if (digits.startsWith('7')) {
      return '+7' + digits.slice(1)
    }
    if (digits.length > 0) {
      return '+7' + digits
    }
    return value
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Поле обязательно для заполнения'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа'
    }

    // Валидация контактов
    if (!formData.contacts.trim()) {
      newErrors.contacts = 'Поле обязательно для заполнения'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contacts)) {
      // Проверка на email
      if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(formData.contacts)) {
        newErrors.contacts = 'Введите корректный email адрес'
      }
    }

    // Валидация телефона
    if (!formData.phone.trim()) {
      newErrors.phone = 'Поле обязательно для заполнения'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона (например: +7 999 123-45-67)'
    }

    // Валидация ИНН
    if (!formData.inn.trim()) {
      newErrors.inn = 'Поле обязательно для заполнения'
    } else if (!validateINN(formData.inn)) {
      newErrors.inn = 'ИНН должен содержать 10 или 12 цифр'
    }

    // Валидация согласия
    if (!formData.consent) {
      newErrors.consent = 'Необходимо дать согласие на обработку персональных данных'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
      // Очищаем ошибку при изменении
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name as keyof FormErrors]
          return newErrors
        })
      }
    } else {
      let processedValue = value

      // Форматирование телефона
      if (name === 'phone') {
        processedValue = formatPhone(value)
      }

      setFormData((prev) => ({
        ...prev,
        [name]: processedValue,
      }))

      // Очищаем ошибку при изменении
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name as keyof FormErrors]
          return newErrors
        })
      }
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Здесь будет отправка данных на сервер
      // Пока просто симулируем отправку
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // В реальном проекте здесь будет:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('Ошибка отправки')

      setIsSuccess(true)
      setFormData({
        name: '',
        contacts: '',
        phone: '',
        inn: '',
        consent: false,
      })

      // Скрываем сообщение об успехе через 5 секунд
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      setErrors({
        contacts: 'Произошла ошибка при отправке формы. Попробуйте позже.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-orange-teal p-8 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-4">
                ХОТИТЕ УЗНАТЬ БОЛЬШЕ, РАССЧИТАТЬ СТОИМОСТЬ ИЛИ ЗАБРАТЬ УСТРОЙСТВО НА БЕСПЛАТНЫЙ ТЕСТ?
              </h2>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-teal to-blue-600 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">
                УСЛУГА ДОСТУПНА ТОЛЬКО ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ
              </h3>
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-300 font-semibold">
                    ✓ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя *"
                    className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-teal'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="contacts"
                    value={formData.contacts}
                    onChange={handleChange}
                    placeholder="Оставьте ваши контакты (email) *"
                    className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none transition-colors ${
                      errors.contacts
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-teal'
                    }`}
                    aria-invalid={!!errors.contacts}
                    aria-describedby={errors.contacts ? 'contacts-error' : undefined}
                  />
                  {errors.contacts && (
                    <p id="contacts-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.contacts}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ваш телефон +7 *"
                    className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-teal'
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="inn"
                    value={formData.inn}
                    onChange={handleChange}
                    placeholder="Ваш ИНН *"
                    maxLength={12}
                    className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none transition-colors ${
                      errors.inn
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-teal'
                    }`}
                    aria-invalid={!!errors.inn}
                    aria-describedby={errors.inn ? 'inn-error' : undefined}
                  />
                  {errors.inn && (
                    <p id="inn-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.inn}
                    </p>
                  )}
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={`mt-1 ${errors.consent ? 'ring-2 ring-red-500' : ''}`}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                  />
                  <label htmlFor="consent" className="text-sm">
                    Согласие на обработку персональных данных и согласие с условиями *
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" className="text-sm text-red-400" role="alert">
                    {errors.consent}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'ОТПРАВКА...' : 'НАЧАТЬ!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

