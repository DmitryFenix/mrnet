'use client'

export default function ContactForm() {
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
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя *"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Оставьте ваши контакты"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Ваш телефон +7"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ваш ИНН"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-teal"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm">
                    Согласие на обработку персональных данных и согласие с условиями
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-dark transition-colors"
                >
                  НАЧАТЬ!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


