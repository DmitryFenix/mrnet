'use client'

export default function AggregationSection() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          НЕ БАЛАНСИРУЕМ А СУММИРУЕМ
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="bg-gradient-orange-teal p-1 rounded-lg">
              <div className="bg-black rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">НЕ БАЛАНСИРУЕМ</h3>
                <div className="w-full h-48 bg-gradient-to-br from-orange to-teal rounded-lg flex items-center justify-center">
                  <div className="text-4xl">🚂</div>
                </div>
                <p className="mt-4 text-gray-400">Старый подход</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-orange-teal p-1 rounded-lg">
              <div className="bg-black rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">А СУММИРУЕМ</h3>
                <div className="w-full h-48 bg-gradient-to-br from-orange to-teal rounded-lg flex items-center justify-center">
                  <div className="text-4xl">🚄</div>
                </div>
                <p className="mt-4 text-gray-400">Современный подход</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


