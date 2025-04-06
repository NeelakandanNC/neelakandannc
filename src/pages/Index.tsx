
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/common/SectionHeader';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Your Photo Here
                </div>
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

      {/* Featured Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Featured Content" 
            subtitle="Explore some of my latest stories and works."
            centered
            className="animate-on-scroll"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {/* Blog Preview Card */}
            <Card className="animate-on-scroll">
              <CardContent className="p-6 space-y-4">
                <div className="text-2xl font-semibold">Latest Stories</div>
                <p className="text-muted-foreground">
                  Dive into my thoughts, tutorials, and insights on various topics.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/blog">
                    Browse All Stories <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Projects Preview Card */}
            <Card className="animate-on-scroll">
              <CardContent className="p-6 space-y-4">
                <div className="text-2xl font-semibold">Works Showcase</div>
                <p className="text-muted-foreground">
                  Explore the various projects I've worked on throughout my career.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    View All Works <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Timeline Preview Card */}
            <Card className="animate-on-scroll">
              <CardContent className="p-6 space-y-4">
                <div className="text-2xl font-semibold">Life Timeline</div>
                <p className="text-muted-foreground">
                  Journey through the significant events and milestones in my life.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/timeline">
                    Explore Timeline <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll">
            Let's Connect!
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-on-scroll">
            Have a question or just want to say hello? I'd love to hear from you.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="mt-6 animate-on-scroll"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
