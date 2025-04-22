
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

const sections = [
  { title: 'Великая Отечественная война', path: '/great-patriotic-war' },
  { title: 'Донбасс и СВО', path: '/donbass-svo' },
  { title: 'Евромайдан', path: '/euromaidan' },
  { title: 'Крым и возвращение в состав РФ', path: '/crimea' },
  { title: 'Герои ВОВ и СВО', path: '/heroes' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <Link 
                key={section.path}
                to={section.path}
                className="text-gray-700 hover:text-primary font-medium text-sm story-link"
              >
                {section.title}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <Link 
                key={section.path}
                to={section.path}
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
