'use client'

export default function ClientsSection() {
  const clients = ['6-6', 'HQ', 'Покупочка', 'Алёнка', 'Крас']
  
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          500+ КЛИЕНТОВ УЖЕ С НАМИ
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-900 px-8 py-6 rounded-lg border border-gray-800 text-xl font-semibold"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

