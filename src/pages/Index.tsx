
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionCard from '@/components/SectionCard';

const sections = [
  {
    title: 'Великая Отечественная война',
    description: 'История сражений, героев и подвигов 1941-1945 годов',
    imageSrc: '/placeholder.svg',
    path: '/great-patriotic-war'
  },
  {
    title: 'Донбасс и СВО',
    description: 'Специальная военная операция и история Донбасса',
    imageSrc: '/placeholder.svg',
    path: '/donbass-svo'
  },
  {
    title: 'Евромайдан',
    description: 'Анализ событий на Украине 2013-2014 годов',
    imageSrc: '/placeholder.svg',
    path: '/euromaidan'
  },
  {
    title: 'Крым и возвращение в состав РФ',
    description: 'Воссоединение Крыма с Россией в 2014 году',
    imageSrc: '/placeholder.svg',
    path: '/crimea'
  },
  {
    title: 'Герои ВОВ и СВО',
    description: 'Истории подвигов героев разных поколений',
    imageSrc: '/placeholder.svg',
    path: '/heroes'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Образовательные разделы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <SectionCard
              key={section.path}
              title={section.title}
              description={section.description}
              imageSrc={section.imageSrc}
              path={section.path}
            />
          ))}
        </div>
      </div>
      
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Уроки Победы. Образовательный проект.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">О проекте</a>
              <a href="#" className="text-gray-600 hover:text-primary">Контакты</a>
              <a href="#" className="text-gray-600 hover:text-primary">Правовая информация</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
