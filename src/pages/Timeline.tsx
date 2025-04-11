
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TimelineCard, { TimelineEvent } from '@/components/timeline/TimelineCard';
import useAnimateOnScroll from '@/utils/animateOnScroll';
import { Calendar, Clock } from 'lucide-react';

// Enhanced timeline data with new events
const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2025',
    title: 'Launched Personal Blog',
    description: 'Finally created my personal blog to share my thoughts and showcase my work with the world.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
  },
  {
    id: '2',
    year: '2024',
    title: 'Started New Role as Senior Developer',
    description: 'Took on a new challenge as a Senior Developer at a tech startup, leading a team of talented engineers.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
  },
  {
    id: '3',
    year: '2023',
    title: 'Contributed to Open Source',
    description: 'Made significant contributions to major open source projects, helping thousands of developers worldwide.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  },
  {
    id: '4',
    year: '2022',
    title: 'Completed Master\'s Degree',
    description: 'Graduated with a Master\'s degree in Computer Science, specializing in artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
  },
  {
    id: '5',
    year: '2021',
    title: 'Started Masters Program',
    description: 'Enrolled in a prestigious Master\'s program to deepen my knowledge in computer science and AI technologies.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
  },
  {
    id: '6',
    year: '2020',
    title: 'First Professional Role',
    description: 'Started my professional career as a Junior Developer at a leading tech company.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  },
  {
    id: '7',
    year: '2019',
    title: 'Graduated from University',
    description: 'Earned my Bachelor\'s degree in Computer Science with honors.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
  },
  {
    id: '9',
    year: '2014',
    title: 'Built First Web Application',
    description: 'Created my first complete web application as a self-taught programmer, sparking my passion for development.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
  {
    id: '10',
    year: '2011',
    title: 'Started Learning Programming',
    description: 'Wrote my first lines of code and discovered my passion for software development.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
  },
  {
    id: '11',
    year: '2008',
    title: 'First Computer',
    description: 'Got my first personal computer which sparked my interest in technology.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: '12',
    year: '2005',
    title: 'Early Interest in Technology',
    description: 'Developed an early fascination with gadgets and how things work, setting the foundation for my future career.',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387',
  }
];

const Timeline = () => {
  // Use the correct hook to initialize animation
  useAnimateOnScroll();
  
  return (
    <PageLayout>
      {/* Hero Section - Enhanced with animation and gradient */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-3 inline-flex items-center justify-center animate-pulse">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">My Life Timeline</h1>
            <p className="text-xl text-muted-foreground">
              A chronological journey through significant moments and milestones in my life.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced with better styling */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            {/* Timeline header */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-2 bg-card p-3 px-5 rounded-full shadow-md border border-border/50">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">Journey Timeline</span>
              </div>
            </div>
            
            {/* Timeline container with connected events */}
            <div className="relative">
              {/* Main timeline vertical line - visible on md screens and up */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20"></div>
              
              {/* Timeline Events */}
              <div className="space-y-24 md:space-y-0">
                {timelineEvents.map((event, index) => (
                  <TimelineCard 
                    key={event.id} 
                    event={event} 
                    position={index % 2 === 0 ? 'left' : 'right'} 
                    index={index}
                  />
                ))}
              </div>
              
              {/* Timeline end marker */}
              <div className="hidden md:flex mt-12 justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Timeline;
