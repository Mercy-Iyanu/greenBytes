import { BlogPost } from '../types/blog';
import BlogCard from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (postId: string) => void;
}

export default function BlogList({ posts, onPostClick }: BlogListProps) {
  // const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            Featured Articles
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => onPostClick(post.id)}
              />
            ))}
          </div>
        </section>
      )} */}

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
        <div className="grid gap-6">
          {regularPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => onPostClick(post.id)}
            />
          ))}
        </div>
      </section>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-400 text-lg">No articles found matching your search.</p>
        </div>
      )}
    </div>
  );
}