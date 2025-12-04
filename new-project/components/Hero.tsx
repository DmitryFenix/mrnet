'use client'

export default function Hero() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              БЕСПРОВОДНОЙ ИНТЕРНЕТ ДЛЯ БИЗНЕСА
            </h1>
            <div className="mb-8">
              <p className="text-2xl font-bold mb-2">ОТ 2 990 РУБЛЕЙ* В МЕСЯЦ!</p>
              <p className="text-xl mb-6">УСТАНОВКА ПО ЛЮБОМУ АДРЕСУ В РФ!</p>
              <button className="bg-teal text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-dark transition-colors">
                ПОПРОБОВАТЬ
              </button>
            </div>
            <ul className="space-y-3 text-lg mb-6">
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Мультироутер с технологией агрегации каналов</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Высокая скорость и отказоустойчивость</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Один договор на ПО, оборудование и связь</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Простое подключение за 7 минут</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Техподдержка 24/7 в Telegram</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm">*Условия уточняйте у менеджера</p>
          </div>
          <div className="relative">
            <div className="bg-gradient-orange-teal p-8 rounded-2xl">
              <div className="bg-black rounded-lg p-12 text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-orange to-teal rounded-lg flex items-center justify-center">
                  <div className="text-6xl">📡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-teal text-4xl mb-4">📶</div>
            <h3 className="text-xl font-semibold mb-2">НАДЕЖНЫЙ И БЫСТРЫЙ ИНТЕРНЕТ, КОТОРЫЙ НЕ ПАДАЕТ</h3>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-teal text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ</h3>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="text-teal text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">ЕДИНЫЙ ИНСТРУМЕНТ ДЛЯ МАСШТАБИРОВАНИЯ ПО ВСЕЙ СТРАНЕ</h3>
          </div>
        </div>
      </div>
    </section>
  )
}


