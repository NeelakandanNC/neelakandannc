
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon } from 'lucide-react';
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
    <Card className="overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-md group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{project.year}</Badge>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2 mt-4">
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
          
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
