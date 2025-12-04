'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">ООО "МРНЕТ"</h3>
            <p className="text-sm text-gray-400">ОГРН: 1234567890123</p>
            <p className="text-sm text-gray-400">Юридический адрес: г. Москва, ул. Примерная, д. 1</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Контакты</h3>
            <p className="text-sm text-gray-400 mb-1">Email: info@mrnet.ru</p>
            <p className="text-sm text-gray-400 mb-1">Рабочие часы: Пн-Пт 9:00-18:00</p>
            <p className="text-sm text-gray-400 mb-1">Телефон поддержки: +7 800 600-85-28</p>
            <p className="text-sm text-gray-400 mb-1">Email поддержки: support@mrnet.ru</p>
            <p className="text-sm text-gray-400">Часы поддержки: 24/7</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div>
            <div className="text-2xl font-bold mb-2">mrnet</div>
            <p className="text-sm text-gray-400">
              ИНТЕРНЕТ - ДЛЯ НОВОЙ ИНФРАСТРУКТУРЫ ДЛЯ БИЗНЕСА
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">© 2023. mrnet.ru. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


