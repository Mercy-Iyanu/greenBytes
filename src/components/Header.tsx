import React from 'react';
import { Terminal, Search, Menu } from 'lucide-react';
import { NavigationState } from '../types/blog';

interface HeaderProps {
  navigation: NavigationState;
  onNavigate: (view: 'home' | 'about') => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ navigation, onNavigate, searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
              <Terminal className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Green Byte Series</h1>
              <p className="text-sm text-zinc-400">Sustainable Tech Insights</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                navigation.currentView === 'home'
                  ? 'text-emerald-400'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors ${
                navigation.currentView === 'about'
                  ? 'text-emerald-400'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              About
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-64"
              />
            </div>
            <button className="md:hidden p-2 text-zinc-400 hover:text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}