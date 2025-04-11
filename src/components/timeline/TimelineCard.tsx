import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Calendar, Star, GraduationCap, Clock, DollarSign, Briefcase, Rocket, BookOpen, ChartBar, Lightbulb, Award, Coins, Store, Laptop } from 'lucide-react';

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
  index: number;
}

const TimelineCard = ({ event, position, index }: TimelineCardProps) => {
  // Calculate delay based on index for staggered animation
  const animationDelay = `${index * 0.15}s`;
  
  // Function to get icons based on index for various fields
  const getFloatingIcons = (idx: number) => {
    // Different icon sets based on theme/field
    const fields = [
      // Finance theme
      [<DollarSign key="dollar" className="text-primary animate-bounce" />, 
       <Coins key="coins" className="text-secondary animate-pulse" />, 
       <ChartBar key="chart" className="text-accent animate-float" />],
      
      // Education theme
      [<GraduationCap key="grad" className="text-primary animate-float" />, 
       <BookOpen key="book" className="text-secondary animate-bounce" />, 
       <Award key="award" className="text-accent animate-pulse" />],
      
      // Time theme
      [<Clock key="clock" className="text-primary animate-spin-slow" />, 
       <Calendar key="calendar" className="text-secondary animate-pulse" />],
      
      // Business theme
      [<Briefcase key="briefcase" className="text-primary animate-float" />, 
       <Store key="store" className="text-secondary animate-pulse" />, 
       <ChartBar key="chart-business" className="text-accent animate-bounce" />],
      
      // Entrepreneurship theme
      [<Rocket key="rocket" className="text-primary animate-float" />, 
       <Lightbulb key="bulb" className="text-secondary animate-pulse" />, 
       <Laptop key="laptop" className="text-accent animate-bounce" />]
    ];
    
    return fields[idx % fields.length];
  };
  
  return (
    <div 
      className={cn(
        "relative flex w-full animate-on-scroll",
        position === 'left' ? "justify-start md:pr-8" : "justify-end md:pl-8",
        "mb-10 md:mb-0"
      )}
      style={{ '--delay': animationDelay } as React.CSSProperties}
    >
      {/* Timeline dot - only visible on md screens and up */}
      <div className="hidden md:flex absolute top-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className={cn(
          "w-6 h-6 rounded-full bg-gradient-to-r shadow-lg flex items-center justify-center",
          index % 3 === 0 ? "from-primary to-secondary" : 
          index % 3 === 1 ? "from-secondary to-accent" : 
          "from-accent to-primary"
        )}>
          <Star className="h-3 w-3 text-white" />
        </div>
      </div>
      
      {/* Line connecting dots - only visible on md screens */}
      <div className={cn(
        "hidden md:block absolute top-5 h-[2px]",
        position === 'left' ? "right-0 left-auto w-[calc(50%-12px)]" : "left-0 right-auto w-[calc(50%-12px)]",
        index % 3 === 0 ? "bg-primary/50" : 
        index % 3 === 1 ? "bg-secondary/50" : 
        "bg-accent/50"
      )}></div>
      
      {/* Line connecting to next dot - only visible on md screens */}
      <div className={cn(
        "hidden md:block absolute top-5 bottom-0 w-[2px] left-1/2 transform -translate-x-1/2",
        index % 3 === 0 ? "bg-primary/30" : 
        index % 3 === 1 ? "bg-secondary/30" : 
        "bg-accent/30",
        "h-full"
      )}></div>
      
      {/* Floating icons in the timeline space - visible on md screens and up */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
        <div className="relative w-full h-full">
          {/* Get icons based on card index */}
          {getFloatingIcons(index).map((icon, i) => {
            // Calculate random position for each icon
            const randomX = (i * 20) % 40;
            const randomY = ((i * 25) + 10) % 50;
            const randomDelay = (i * 0.5) % 2;
            
            return (
              <div 
                key={`icon-${i}`} 
                className="absolute"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  animationDelay: `${randomDelay}s`,
                }}
              >
                {icon}
              </div>
            );
          })}
        </div>
      </div>
      
      <Card 
        className={cn(
          "w-full md:w-[calc(50%-24px)] border border-border/50 transition-all duration-500 hover:shadow-xl group",
          position === 'right' && 'md:ml-auto',
          "overflow-hidden backdrop-blur-sm bg-card/80 hover-lift"
        )}
      >
        {event.image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        
        <CardContent className="p-6 relative">
          <div className="absolute -top-4 right-4 bg-gradient-to-r from-secondary to-primary text-white px-4 py-1 rounded-full font-semibold flex items-center gap-1.5 shadow-lg">
            <Calendar className="w-4 h-4" />
            {event.year}
          </div>
          <h3 className="text-xl font-semibold mb-3 mt-2 group-hover:text-gradient transition-colors duration-300">
            {event.title}
          </h3>
          <div className="h-px w-20 bg-gradient-to-r from-primary to-secondary mb-4"></div>
          <p className="text-muted-foreground">
            {event.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineCard;
