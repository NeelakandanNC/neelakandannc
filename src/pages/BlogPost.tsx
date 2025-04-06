import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share } from 'lucide-react';
import { BlogPost } from '@/components/blog/BlogCard';

// Sample blog data - in a real app you'd fetch this from an API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    excerpt: 'Learn the basics of web development and how to create your first website using modern technologies.',
    date: 'Apr 2, 2025',
    readTime: '5 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    id: '2',
    title: 'My Journey in Design Systems',
    excerpt: 'A personal account of learning and implementing design systems in real-world projects.',
    date: 'Mar 25, 2025',
    readTime: '8 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9',
  },
  {
    id: '3',
    title: 'The Power of Mindfulness in Daily Life',
    excerpt: 'Exploring how mindfulness practices can improve focus, reduce stress, and increase overall wellbeing.',
    date: 'Mar 18, 2025',
    readTime: '6 min read',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  },
  {
    id: '4',
    title: 'Mastering React Hooks',
    excerpt: 'Take your React skills to the next level with these advanced hook techniques and patterns.',
    date: 'Mar 10, 2025',
    readTime: '10 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  },
  {
    id: '5',
    title: 'Traveling on a Budget',
    excerpt: 'Tips and tricks for exploring the world without breaking the bank.',
    date: 'Feb 28, 2025',
    readTime: '7 min read',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
  },
  {
    id: '6',
    title: 'The Art of Productive Habits',
    excerpt: 'Building daily routines that boost productivity and help achieve long-term goals.',
    date: 'Feb 15, 2025',
    readTime: '9 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
  },
];

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the post with the matching ID
  const post = blogPosts.find(p => p.id === id);
  
  // If post not found, show error
  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate('/blog')}>
            Back to Blog
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="animate-fade-in">
        {/* Header */}
        <header className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Button
              variant="ghost"
              className="mb-6 -ml-2"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="container mx-auto px-4 md:px-6 max-w-4xl -mt-12 mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-3xl py-8">
          <div className="prose prose-lg mx-auto text-content">
            <p>
              This is a sample blog post content. In a real application, you would fetch the full content from your database or CMS.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>
            <h2>Heading Level 2</h2>
            <p>
              Morbi maximus justo et nibh porta, id tempus metus posuere. Duis nec neque purus. Donec fringilla nisl quis feugiat maximus. Morbi sagittis nisl sed maximus sagittis. Nam faucibus orci ac magna vehicula, nec varius nibh vehicula. Morbi maximus justo et nibh porta, id tempus metus posuere.
            </p>
            <blockquote>
              This is a sample blockquote to demonstrate how it would look in the blog post.
            </blockquote>
            <p>
              Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.
            </p>
            <h3>Heading Level 3</h3>
            <p>
              Nulla facilisi. Maecenas sodales nec purus eget posuere. Sed sapien quam, pretium a risus in, porttitor dapibus erat. Sed sit amet fringilla ipsum, eget iaculis augue. Integer sollicitudin tortor quis ultricies aliquam. Suspendisse fringilla nunc in tellus cursus, at placerat tellus scelerisque.
            </p>
          </div>
          
          {/* Share */}
          <div className="border-t border-border mt-12 pt-6">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Share this post</h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
                {/* Add other share buttons as needed */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostPage;
