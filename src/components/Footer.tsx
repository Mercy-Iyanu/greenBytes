import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Green Byte Series</h3>
              <p className="text-sm text-zinc-400">Sustainable Tech Insights</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-zinc-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for a sustainable future</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>&copy; 2024 Green Byte Series. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}