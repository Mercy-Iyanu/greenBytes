import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import BlogPostView from './components/BlogPostView';
import About from './components/About';
import Footer from './components/Footer';
import { blogPosts } from './data/blogPosts';
import { NavigationState } from './types/blog';

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({
    currentView: 'home'
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return blogPosts;
    
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const handleNavigate = (view: 'home' | 'about') => {
    setNavigation({ currentView: view });
  };

  const handlePostClick = (postId: string) => {
    setNavigation({ currentView: 'post', currentPostId: postId });
  };

  const handleBackToHome = () => {
    setNavigation({ currentView: 'home' });
  };

  const currentPost = navigation.currentPostId
    ? blogPosts.find(post => post.id === navigation.currentPostId)
    : null;

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header
        navigation={navigation}
        onNavigate={handleNavigate}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main>
        {navigation.currentView === 'home' && (
          <>
            <Hero />
            <BlogList posts={filteredPosts} onPostClick={handlePostClick} />
          </>
        )}
        
        {navigation.currentView === 'post' && currentPost && (
          <BlogPostView post={currentPost} onBack={handleBackToHome} />
        )}
        
        {navigation.currentView === 'about' && <About />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;