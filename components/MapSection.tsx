'use client'

export default function MapSection() {
  const cities = [
    { name: 'Санкт-Петербург', phone: '+7 800 600-85-28' },
    { name: 'Москва', phone: '+7 800 600-85-28' },
    { name: 'Казань', phone: '+7 800 600-85-28' },
    { name: 'Краснодар', phone: '+7 800 600-85-28' },
    { name: 'Екатеринбург', phone: '+7 800 600-85-28' },
    { name: 'Челябинск', phone: '+7 800 600-85-28' },
    { name: 'Новосибирск', phone: '+7 800 600-85-28' },
    { name: 'Владивосток', phone: '+7 800 600-85-28' },
  ]

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          ПОДКЛЮЧАЕМ К СТАБИЛЬНОМУ ИНТЕРНЕТУ ПО ВСЕЙ РОССИИ
        </h2>
        <div className="relative bg-gray-900 rounded-lg p-8 mb-8">
          <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-400">Карта России с точками подключения</p>
              <div className="flex gap-4 mt-6 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange rounded"></div>
                  <span className="text-sm">Наши клиенты</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal rounded-full"></div>
                  <span className="text-sm">Отдел продаж</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h3 className="font-bold mb-2">{city.name}</h3>
              <a href={`tel:${city.phone}`} className="text-teal hover:text-teal-light">
                {city.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

