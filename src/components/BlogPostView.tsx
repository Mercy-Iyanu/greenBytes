import React from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold text-white mb-4 mt-6">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-emerald-400 mb-3 mt-5">{line.slice(4)}</h3>;
      }
      if (line.startsWith('```')) {
        return null; // Handle code blocks separately if needed
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="text-zinc-300 leading-relaxed mb-4">{line}</p>;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to articles</span>
      </button>

      <article className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-zinc-400">
            <div className="flex items-center space-x-1">
              <img
                src={post.authorPhoto}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {formatContent(post.content)}
        </div>
      </article>
    </div>
  );
}