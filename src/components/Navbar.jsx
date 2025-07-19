// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">Philonet</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-black transition">Home</a>
        <a href="#" className="text-gray-600 hover:text-black transition">About</a>
        <a href="#" className="text-gray-600 hover:text-black transition">Contact</a>
      </nav>
    </header>
  )
}
