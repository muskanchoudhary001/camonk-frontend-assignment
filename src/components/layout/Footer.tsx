export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0b14] to-black text-gray-400">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="./src/assets/Logo.jpg"
              alt="CA Monk"
              className="h-8"
            />
            <span className="text-white text-lg font-semibold">
              CA MONK
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Webinars</a></li>
            <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
          </ul>
        </div>

        {/* PLATFORM */}
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Job Board</a></li>
            <li><a href="#" className="hover:text-white transition">Practice Tests</a></li>
            <li><a href="#" className="hover:text-white transition">Mentorship</a></li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 CA Monk. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
