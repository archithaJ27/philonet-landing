import { Link } from 'react-scroll';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-100 text-center py-10 px-6 border-t"
    >
      <h2 className="text-xl font-bold mb-4 text-blue-600">Philonet</h2>

      <nav className="flex justify-center gap-6 text-sm text-gray-600 mb-6">
        {['hero', 'features', 'about'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-60}
            className="cursor-pointer hover:text-blue-600"
            spy={true}
            activeClass="text-blue-800 underline"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center gap-6 text-gray-500 mb-4">
        <a href="#" className="hover:text-blue-600">
          <Twitter />
        </a>
        <a href="#" className="hover:text-blue-600">
          <Instagram />
        </a>
        <a href="#" className="hover:text-blue-600">
          <Linkedin />
        </a>
      </div>

      <p className="text-xs text-gray-500">© {new Date().getFullYear()} Philonet. All rights reserved.</p>
    </footer>
  );
}
