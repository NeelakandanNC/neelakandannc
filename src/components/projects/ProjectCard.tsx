
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border-none glass-card transition-all duration-300 hover:shadow-xl group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-secondary/90 hover:bg-secondary border-none text-white font-medium">{project.year}</Badge>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <Badge key={tag} variant="outline" className="bg-accent/10 border-accent/20 text-foreground hover:bg-accent/20">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2 mt-4">
          {project.liveUrl && (
            <Button variant="default" size="sm" className="neon-glow bg-primary hover:bg-primary/90" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
          
          {project.repoUrl && (
            <Button variant="outline" size="sm" className="hover:bg-muted/50 border-primary/20" asChild>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" /> Source Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
