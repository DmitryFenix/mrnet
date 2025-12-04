'use client'

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">mrnet</div>
          <div className="flex items-center gap-6">
            <a href="tel:+78006008528" className="text-white hover:text-teal transition-colors">
              +7 800 600-85-28
            </a>
            <span className="text-teal font-semibold">ТЕХНОЛОГИЯ</span>
          </div>
        </div>
      </div>
    </header>
  )
}

