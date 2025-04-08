
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionHeader from '@/components/common/SectionHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import BlogCard, { BlogPost } from '@/components/blog/BlogCard';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Sample blog data
const featuredPosts: BlogPost[] = [
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
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              Welcome to Neelakandan NC
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Documenting my journey, sharing my thoughts, and showcasing my work.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/blog">
                  Read My Stories
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/projects">
                  View Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="About Me" 
            subtitle="A brief introduction about who I am and what I do."
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden border border-border">
                <img 
                  src="/lovable-uploads/30216f8c-ddb5-4ea6-89d2-e2a31290c718.png" 
                  alt="Neelakandan NC" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg">
                Hello! I'm a passionate creator, thinker, and storyteller. This personal blog is where I share my thoughts, document my journey, and showcase the projects I've worked on over the years.
              </p>
              <p className="text-lg">
                My interests span across technology, design, writing, and more. I believe in continuous learning and sharing knowledge with others.
              </p>
              <p className="text-lg">
                Through this platform, I aim to connect with like-minded individuals and build a community of creators who inspire each other.
              </p>
              <Button asChild>
                <Link to="/timeline">
                  View My Timeline <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Featured Stories" 
            subtitle="Read some of my latest thoughts and insights."
            centered
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {featuredPosts.map((post) => (
              <div key={post.id} className="animate-on-scroll">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <Button asChild>
              <Link to="/blog">
                View All Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA with Social Media Icons */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll">
            Let's Connect!
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-on-scroll">
            Have a question or just want to say hello? Find me on these platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-on-scroll">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://www.linkedin.com/in/neelakandan-nc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="mailto:neelakandannithin@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://www.instagram.com/neelakandannc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://x.com/NeelakandanNC" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <Twitter size={24} />
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://www.facebook.com/NeelakandanNC" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://www.youtube.com/@Journeyofbuilders" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
