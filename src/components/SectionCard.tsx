
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  path: string;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  imageSrc,
  path,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden hover-scale transition-all duration-300", className)}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        <p>Нажмите, чтобы изучить этот раздел подробнее</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={path}>Перейти к разделу</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SectionCard;
