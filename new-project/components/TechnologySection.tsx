'use client'

export default function TechnologySection() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">ТЕХНОЛОГИЯ</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-orange-teal p-8 rounded-2xl">
              <div className="bg-black rounded-lg p-12 text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-orange to-teal rounded-lg flex items-center justify-center">
                  <div className="text-6xl">🔧</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gradient-orange-teal p-8 rounded-lg text-white">
              <p className="text-lg mb-6">
                Технология mrnet объединяет несколько каналов связи в один, 
                обеспечивая высокую скорость и стабильность интернет-соединения. 
                Агрегация каналов позволяет суммировать пропускную способность 
                и создавать отказоустойчивую сеть.
              </p>
              <button className="bg-teal-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal transition-colors">
                УЗНАТЬ БОЛЬШЕ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


