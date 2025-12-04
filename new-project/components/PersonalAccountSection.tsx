'use client'

export default function PersonalAccountSection() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 max-w-4xl mx-auto">
          НАСТРАИВАЙТЕ СЕТЬ И УПРАВЛЯЙТЕ ВСЕМИ УСТРОЙСТВАМИ ЧЕРЕЗ ЕДИНЫЙ ЛИЧНЫЙ КАБИНЕТ
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal">МОНИТОРИНГ</h3>
              <p className="text-lg text-gray-300">
                Графики потребления трафика, просмотр подключенных устройств сети
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal">ТОНКАЯ НАСТРОЙКА</h3>
              <p className="text-lg text-gray-300">
                Настройка PPTP, L2TP, GRE, IPIP туннелей, проброс портов
              </p>
            </div>
            <button className="bg-teal text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-dark transition-colors">
              ИСПЫТАТЬ ВСЕ ВОЗМОЖНОСТИ
            </button>
          </div>
          <div className="relative">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="h-4 bg-teal rounded w-3/4"></div>
                  <div className="h-4 bg-teal rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-orange to-teal rounded mt-4"></div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-16 bg-gray-700 rounded"></div>
                    <div className="h-16 bg-gray-700 rounded"></div>
                    <div className="h-16 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


