import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
  id: '1',
  title: 'Why Docs Make Your Code Greener',
  excerpt: 'Discover how writing documentation is not only good developer etiquette but a subtle, powerful green coding practice that reduces waste, burnout, and compute.',
  content: `
I’ve been thinking a lot about one of the most underrated (and least celebrated) green coding practices:
📝 Documentation.

Working on open source projects taught me how great docs can guide you like a GPS — showing what not to touch and what actually needs refactoring.
Compared to some of my older, solo projects? Let's just say... good luck to the next dev 😅

That contrast made it clear:
Documentation is sustainability in action.

## Here’s why:
### ✅ 1. Less Guesswork = Less Compute
When people understand your code, they don’t:
- rebuild features from scratch,
- refactor the wrong thing, or
- spend 2 hours figuring out what handleThatOneThing() does.

Fewer mistakes → Less rework → Lower energy use.
That's digital efficiency.

### ✅ 2. Docs Save Developers from Burnout
Good documentation means:
- fewer meetings,
- fewer DMs like “Can you explain this real quick?”, and
- fewer “hop on a quick call” marathons.

That’s sustainability for people too.
Less stress. More clarity. More joy! ✨

## 💡 How I Write Green Docs:

- Use clear, updated README files
- Include architecture diagrams or flows
- Add comments that teach, not just describe
- Log decisions with brief rationale for peer devs
- Link related resources (images, APIs, configs, staging links)

## 🚀 TL;DR

Writing docs isn’t just about being helpful. It’s a climate-conscious act.
Green coding starts with clear communication.


💬 Drop your favorite documentation tips below 💬👇 I’d love to hear it.`,
  author: 'Mercy Oyelude',
  authorPhoto: 'https://randomuser.me/api/portraits/women/28.jpg',
  date: '2025-06-11',
  readTime: '4 min read',
  tags: ['Sustainability', 'Documentation', 'Green Coding', 'Best Practices']
  }

];