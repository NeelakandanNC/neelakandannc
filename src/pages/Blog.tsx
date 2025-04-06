
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/common/SectionHeader';
import BlogCard, { BlogPost } from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Sample blog data
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

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Stories</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, insights, tutorials, and stories from my personal and professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 animate-fade-in">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search stories..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-muted-foreground h-4 w-4" />
              <span className="text-sm text-muted-foreground">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="animate-on-scroll">
                  <BlogCard post={post} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-muted-foreground">No stories found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
