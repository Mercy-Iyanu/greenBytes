import React from 'react';
import { Github, Twitter, Mail, Leaf, Code, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">About Green Byte Series</h1>
        
        <p className="text-zinc-300 leading-relaxed mb-6">
          Green Byte Series is a technical blog focused on the intersection of software development 
          and environmental sustainability. We explore how developers can write more efficient code, 
          optimize performance, and make technological choices that respect our planet's resources.
        </p>
        
        <p className="text-zinc-300 leading-relaxed mb-8">
          In an era where software powers everything from smart phones to data centers, the 
          environmental impact of our code has never been more important. Every algorithm we choose, 
          every optimization we make, and every architectural decision we implement has real-world 
          consequences for energy consumption and carbon emissions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Code className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
            <p className="text-zinc-400 text-sm">
              Techniques for writing efficient, maintainable code that minimizes resource usage
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
            <p className="text-zinc-400 text-sm">
              Optimization strategies that improve speed while reducing energy consumption
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Leaf className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Sustainability</h3>
            <p className="text-zinc-400 text-sm">
              Exploring how technology choices impact the environment and our future
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
        
        <p className="text-zinc-300 leading-relaxed mb-6">
          Have questions about sustainable development practices? Want to contribute to the conversation? 
          We'd love to hear from you.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@greenbytesileres.dev"
            className="flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>hello@greenbyteseries.dev</span>
          </a>
          
          <a
            href="#"
            className="flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg text-zinc-300 hover:text-white transition-colors"
          >
            <Twitter className="w-4 h-4" />
            <span>@greenbyteseries</span>
          </a>
          
          <a
            href="#"
            className="flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg text-zinc-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/greenbyteseries</span>
          </a>
        </div>
      </section>
    </div>
  );
}