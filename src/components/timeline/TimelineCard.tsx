
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineCardProps {
  event: TimelineEvent;
  position: 'left' | 'right';
}

const TimelineCard = ({ event, position }: TimelineCardProps) => {
  return (
    <div className={cn(
      "relative flex w-full animate-on-scroll",
      position === 'left' ? 'justify-start' : 'justify-end',
      "mb-10 md:mb-0"
    )}>
      <Card className={cn(
        "w-full md:w-5/6 border border-border/50 transition-all duration-300 hover:shadow-md group",
        position === 'right' && 'md:ml-auto'
      )}>
        {event.image && (
          <div className="h-40 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <CardContent className="p-6">
          <div className="absolute -top-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold">
            {event.year}
          </div>
          <h3 className="text-xl font-semibold mb-2 mt-2 group-hover:text-secondary transition-colors">
            {event.title}
          </h3>
          <p className="text-muted-foreground">
            {event.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineCard;
