import { Clock, Star } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-emerald-500/50 hover:bg-zinc-800/70 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {post.featured && (
            <div className="flex items-center space-x-1 mb-2">
              <Star className="w-4 h-4 text-emerald-400 fill-current" />
              <span className="text-emerald-400 text-xs font-medium">Featured</span>
            </div>
          )}
          <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-zinc-700/50 text-zinc-300 px-2 py-1 rounded-md text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <img 
              src={post.authorPhoto} 
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <span className="text-zinc-500">{post.date}</span>
      </div>
    </article>
  );
}