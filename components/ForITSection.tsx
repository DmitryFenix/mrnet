'use client'

export default function ForITSection() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          РЕШЕНИЕ, СОЗДАННОЕ АЙТИШНИКАМИ ДЛЯ АЙТИШНИКОВ
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">ЦЕНИМ ВАШЕ ВРЕМЯ</h3>
            <p className="text-lg">
              Быстрое подключение Plug & Play за 7 минут
            </p>
          </div>
          <div className="bg-teal p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">БЕЗГРАНИЧНЫЕ ВОЗМОЖНОСТИ</h3>
            <p className="text-lg">
              Подбор оборудования, быстрое подключение в любом месте, 
              без возни с несколькими провайдерами
            </p>
          </div>
          <div className="bg-orange p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
            <p className="text-lg">
              Экономически выгодные решения, расчет стоимости за 1 час в рабочее время
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

