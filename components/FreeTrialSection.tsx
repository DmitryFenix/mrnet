'use client'

export default function FreeTrialSection() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          ПОПРОБУЙТЕ 14 ДНЕЙ БЕСПЛАТНО
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-orange-teal p-8 rounded-lg text-white">
              <p className="text-xl mb-6">
                Развивайте свою инфру с mrnet. Без лишних затрат и костылей. 
                Высокоскоростной интернет — удобно, эффективно!
              </p>
              <button className="bg-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-dark transition-colors">
                НАЧАТЬ!
              </button>
            </div>
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
      </div>
    </section>
  )
}

