
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-[url('/placeholder.svg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Уроки Победы
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Образовательный проект, посвященный сохранению исторической памяти и воспитанию патриотизма
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link to="/great-patriotic-war">
                Изучить материалы
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/heroes">
                Герои Отечества
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
