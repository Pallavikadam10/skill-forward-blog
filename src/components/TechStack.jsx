import { useIntersection } from '../hooks/useIntersection'

const stack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React 18', note: 'Component architecture & hooks', logo: '⚛️' },
      { name: 'Vite', note: 'Lightning-fast dev server & bundler', logo: '⚡' },
      { name: 'Tailwind CSS', note: 'Utility-first styling system', logo: '🎨' },
    ],
  },
  {
    category: 'Tooling',
    items: [
      { name: 'Git & GitHub', note: 'Version control & collaboration', logo: '🔀' },
      { name: 'ESLint', note: 'Code quality & consistency', logo: '🔍' },
      { name: 'npm', note: 'Dependency management', logo: '📦' },
    ],
  },
  {
    category: 'Deployment',
    items: [
      { name: 'Vercel', note: 'Team production deployment', logo: '▲' },
      { name: 'Netlify', note: 'Personal blog & static hosting', logo: '🟢' },
      { name: 'CI/CD', note: 'Automated builds on git push', logo: '🚀' },
    ],
  },
  {
    category: 'AI Layer',
    items: [
      { name: 'LLM API', note: 'Idea generation & classification', logo: '🤖' },
      { name: 'Prompt Engineering', note: 'Structured AI output design', logo: '✍️' },
      { name: 'Vibe Coding', note: 'Human-AI co-creation workflow', logo: '🎯' },
    ],
  },
]

export default function TechStack() {
  const [ref, visible] = useIntersection()

  return (
    <section id="tech" ref={ref} className="py-24 max-w-5xl mx-auto px-6">
      <div
        className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
          05 — Stack
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          Technologies Used
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          A deliberate, lightweight stack optimized for fast iteration, clean collaboration, and easy deployment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stack.map((group, gi) => (
          <div
            key={group.category}
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${gi * 80 + 200}ms` }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-muted mb-3 pl-1">
              {group.category}
            </div>
            <div className="space-y-2.5">
              {group.items.map(item => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl border border-subtle bg-surface hover:border-jade-300 dark:hover:border-jade-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="text-xl mb-2">{item.logo}</div>
                  <div className="font-semibold text-sm text-primary group-hover:text-jade-600 dark:group-hover:text-jade-400 transition-colors">{item.name}</div>
                  <div className="text-xs text-muted mt-0.5 leading-relaxed">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
