import { Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-emerald-950 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Sustainable Tech</span>
          </div>
        </div>
        <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Looking to become a greener coder? Discover how to write code that's efficient, maintainable, and eco-friendly. Learn from hundreds of developers across the globe who are sharing their sustainable coding practices—because the future of software is green.
        </p>
        <div>
          <a
            href="#articles"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Read Articles
          </a>
        </div>
      </div>
    </section>
  );
}