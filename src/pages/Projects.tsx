
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import SectionHeader from '@/components/common/SectionHeader';

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com/ecommerce',
    repoUrl: 'https://github.com/yourusername/ecommerce',
    year: '2025',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines with collaborative features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com/taskapp',
    repoUrl: 'https://github.com/yourusername/taskapp',
    year: '2024',
  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description: 'A weather application providing real-time forecasts, historical data, and location-based weather alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    tags: ['JavaScript', 'Weather API', 'CSS'],
    liveUrl: 'https://example.com/weather',
    repoUrl: 'https://github.com/yourusername/weather',
    year: '2023',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills, projects, and professional experience.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    tags: ['React', 'Gatsby', 'GSAP'],
    liveUrl: 'https://example.com/portfolio',
    repoUrl: 'https://github.com/yourusername/portfolio',
    year: '2022',
  },
  {
    id: '5',
    title: 'Recipe Sharing Platform',
    description: 'A community-driven platform for sharing, discovering, and saving cooking recipes.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f',
    tags: ['Angular', 'Firebase', 'Bootstrap'],
    liveUrl: 'https://example.com/recipes',
    repoUrl: 'https://github.com/yourusername/recipes',
    year: '2021',
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'An application for tracking workouts, setting fitness goals, and monitoring progress over time.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    tags: ['React Native', 'Redux', 'Health API'],
    liveUrl: 'https://example.com/fitness',
    repoUrl: 'https://github.com/yourusername/fitness',
    year: '2020',
  },
];

const Projects = () => {
  return (
    <PageLayout>
      {/* Hero Section with futuristic gradient background */}
      <section className="py-24 md:py-32 bg-gradient-futuristic relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[20%] left-[10%] w-60 h-60 rounded-full bg-accent/30 blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-primary/30 blur-[120px]"></div>
          <div className="absolute top-[40%] right-[30%] w-40 h-40 rounded-full bg-secondary/30 blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient neon-text animate-fade-in">
              My Works
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in">
              A showcase of my work, projects, and creative endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in">
            <SectionHeader 
              title="Browse Works" 
              subtitle="Explore my recent projects and professional work." 
              className="mb-6"
            />
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="animate-on-scroll hover-lift">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
