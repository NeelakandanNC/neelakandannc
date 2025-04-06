
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TimelineCard, { TimelineEvent } from '@/components/timeline/TimelineCard';

// Sample timeline data
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
    year: '2022',
    title: 'Completed Master\'s Degree',
    description: 'Graduated with a Master\'s degree in Computer Science, specializing in artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
  },
  {
    id: '4',
    year: '2020',
    title: 'First Professional Role',
    description: 'Started my professional career as a Junior Developer at a leading tech company.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  },
  {
    id: '5',
    year: '2019',
    title: 'Graduated from University',
    description: 'Earned my Bachelor\'s degree in Computer Science with honors.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
  },
  {
    id: '6',
    year: '2015',
    title: 'Started University',
    description: 'Began my journey in higher education, studying Computer Science.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
  },
];

const Timeline = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Life Timeline</h1>
            <p className="text-xl text-muted-foreground">
              A chronological journey through significant moments and milestones in my life.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            {/* Timeline center line - visible on md screens and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineCard 
                  key={event.id} 
                  event={event} 
                  position={index % 2 === 0 ? 'left' : 'right'} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Timeline;
