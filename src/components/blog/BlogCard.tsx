
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="block group">
      <Card className="overflow-hidden h-full border border-border/50 transition-all duration-300 hover:shadow-md hover:border-border">
        {post.image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <CardContent className="pt-6">
          <Badge variant="outline" className="mb-3">
            {post.category}
          </Badge>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="text-sm text-muted-foreground flex justify-between">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
