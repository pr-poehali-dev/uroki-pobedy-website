
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src="/logo-b.svg" 
        alt="Уроки Победы" 
        className="w-10 h-10 md:w-12 md:h-12" 
      />
      <div className="flex flex-col">
        <span className="font-bold text-primary text-xl md:text-2xl">Уроки Победы</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-600">2025</span>
          <div className="ml-2 flex items-center">
            <div className={cn(
              "w-2 h-2 rounded-full mr-1",
              isOnline ? "bg-green-500" : "bg-red-500"
            )} />
            <span className="text-xs text-gray-500">
              {isOnline ? "онлайн" : "офлайн"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
