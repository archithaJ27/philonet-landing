import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Philonet</div>
      <nav className="hidden md:flex gap-6 text-sm">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Home</Link>
        <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Features</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">About</Link>
      </nav>
    </header>
  );
}


