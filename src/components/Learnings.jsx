import { useIntersection } from '../hooks/useIntersection'
import { TrendingUp, Users, Wrench, Brain, GitMerge, Rocket, Bug, Globe } from 'lucide-react'

const learnings = [
  {
    icon: Brain,
    title: 'AI-Assisted Development',
    desc: 'I learned to treat AI not as a replacement but as a pair programmer — knowing when to prompt, when to verify, and when to override.',
  },
  {
    icon: TrendingUp,
    title: 'React Component Architecture',
    desc: 'Building reusable, data-driven components taught me why separation of concerns matters at every level of a frontend codebase.',
  },
  {
    icon: GitMerge,
    title: 'Real GitHub Collaboration',
    desc: 'Working with a team on shared branches exposed me to the full PR workflow: branching strategy, code review, and merge conflict resolution.',
  },
  {
    icon: Globe,
    title: 'Production Deployment',
    desc: 'Deploying to Vercel with real environment variables, build pipelines, and team preview URLs was different from localhost in every meaningful way.',
  },
  {
    icon: Wrench,
    title: 'Prompt Engineering',
    desc: 'Crafting LLM prompts that reliably return structured, usable data is a skill of its own — one that bridges product thinking and engineering.',
  },
  {
    icon: Bug,
    title: 'Debugging in the Wild',
    desc: 'Chasing production-only bugs and dependency conflicts sharpened my ability to read error traces, isolate causes, and verify fixes systematically.',
  },
  {
    icon: Users,
    title: 'Contributing to a Team',
    desc: 'Writing clean, self-documenting code for others to read — not just for yourself — is the most underrated skill in software development.',
  },
  {
    icon: Rocket,
    title: 'Shipping Features',
    desc: 'The experience of going from local prototype to live, user-facing feature gave me confidence in the full product development cycle.',
  },
]

export default function Learnings() {
  const [ref, visible] = useIntersection()

  return (
    <section id="learnings" ref={ref} className="py-24 bg-surface border-y border-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
            06 — Growth
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            What I Learned
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Beyond the code, the real output of this project was a sharper engineering mindset
            — shaped by real collaboration, real constraints, and real deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learnings.map((item, i) => (
            <div
              key={item.title}
              className={`p-5 rounded-2xl border border-subtle bg-main hover:bg-surface hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 50 + 200}ms` }}
            >
              <div className="w-9 h-9 rounded-xl bg-jade-50 dark:bg-jade-950/40 flex items-center justify-center mb-3 group-hover:bg-jade-100 dark:group-hover:bg-jade-950/60 transition-colors">
                <item.icon size={16} className="text-jade-600 dark:text-jade-400" />
              </div>
              <h3 className="font-semibold text-sm text-primary mb-2">{item.title}</h3>
              <p className="text-xs text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
