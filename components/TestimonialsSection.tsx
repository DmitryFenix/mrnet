'use client'

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          95% КЛИЕНТОВ ВЫБИРАЮТ mrnet ПОСЛЕ ТЕСТ-ДРАЙВА
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">ШОКОЛАДНИЦА</h3>
              <p className="text-gray-400">Руководитель отдела</p>
            </div>
            <p className="text-lg leading-relaxed">
              Стабильный сигнал для различных задач бизнеса, надежная поддержка. 
              Рекомендуем mrnet как надежного партнера для бизнеса.
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button className="text-gray-600 cursor-not-allowed" disabled>←</button>
            <button className="text-teal hover:text-teal-light">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}

