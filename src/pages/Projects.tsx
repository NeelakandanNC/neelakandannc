
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
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
  const [filter, setFilter] = useState('All');
  
  // Extract all unique tags
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Works</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my work, projects, and creative endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Buttons */}
          <div className="mb-12 animate-fade-in">
            <SectionHeader 
              title="Browse Works" 
              subtitle="Filter by technology to find specific projects." 
              className="mb-6"
            />
            
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Button 
                  key={tag} 
                  variant={filter === tag ? "default" : "outline"} 
                  onClick={() => setFilter(tag)}
                  className="mb-2"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="animate-on-scroll">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No works found with the selected filter.
              </p>
              <Button 
                onClick={() => setFilter('All')} 
                variant="outline" 
                className="mt-4"
              >
                Show All Works
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
