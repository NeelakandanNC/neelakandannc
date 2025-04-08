
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard = ({ post, className }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <Card className={cn(
        "overflow-hidden h-full transition-all duration-300 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-primary/5 blog-card border-border/30",
        "bg-card/70 dark:bg-card/70",
        className
      )}>
        {post.image && (
          <div className="h-52 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        
        <CardContent className={cn("pt-6", !post.image && "pb-0")}>
          <div className="flex justify-between items-start mb-3">
            <Badge variant={post.featured ? "default" : "outline"} className="text-xs">
              {post.category}
            </Badge>
            
            {post.featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="text-xs text-muted-foreground flex justify-between pt-4 pb-5">
          <div className="flex items-center">
            <CalendarIcon className="h-3 w-3 mr-1.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-3 w-3 mr-1.5" />
            <span>{post.readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
