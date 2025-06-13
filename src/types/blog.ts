export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorPhoto: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface NavigationState {
  currentView: 'home' | 'post' | 'about';
  currentPostId?: string;
}