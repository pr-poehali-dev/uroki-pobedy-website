
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => {
  return (
    <div className={cn("relative space-y-6", className)}>
      {children}
    </div>
  );
};

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
}

export const TimelineItem = ({ children, className }: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-8", className)}>
      {children}
    </div>
  );
};

interface TimelineConnectorProps {
  className?: string;
}

export const TimelineConnector = ({ className }: TimelineConnectorProps) => {
  return (
    <span className={cn("absolute left-2.5 top-5 h-full w-0.5 bg-gray-200", className)} />
  );
};

interface TimelineHeaderProps {
  children: ReactNode;
  className?: string;
}

export const TimelineHeader = ({ children, className }: TimelineHeaderProps) => {
  return (
    <div className={cn("flex items-center mb-2", className)}>
      {children}
    </div>
  );
};

interface TimelineIconProps {
  className?: string;
}

export const TimelineIcon = ({ className }: TimelineIconProps) => {
  return (
    <div className={cn("absolute left-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary", className)}>
      <span className="h-2 w-2 rounded-full bg-white"></span>
    </div>
  );
};

interface TimelineBodyProps {
  children: ReactNode;
  className?: string;
}

export const TimelineBody = ({ children, className }: TimelineBodyProps) => {
  return (
    <div className={cn("mb-6", className)}>
      {children}
    </div>
  );
};
