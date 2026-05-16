import { Lightbulb, Zap, Target, BarChart3 } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const features = [
  {
    icon: Lightbulb,
    title: 'AI-Driven Ideation',
    desc: 'Users describe a problem, and the platform generates meaningful, scoped project ideas powered by LLMs.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    icon: BarChart3,
    title: 'Problem Classification',
    desc: 'Each idea is classified as a "headache" or "migraine" — scoping complexity and effort for realistic planning.',
    color: 'text-jade-600 dark:text-jade-400',
    bg: 'bg-jade-50 dark:bg-jade-950/30',
  },
  {
    icon: Target,
    title: 'Timeline Estimation',
    desc: 'The platform gives estimated implementation timelines so learners can plan sprints with clarity.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: Zap,
    title: 'Vibe Coding Workflow',
    desc: 'Inspired by human-AI co-creation: describe, iterate, build. Fast feedback loops with LLM assistance.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
  },
]

export default function AboutPlatform() {
  const [ref, visible] = useIntersection()

  return (
    <section id="platform" ref={ref} className="py-24 max-w-5xl mx-auto px-6">
      {/* Section label */}
      <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
          01 — The Platform
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          What is Vibe Coding for Good?
        </h2>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed">
          A collaborative AI platform that transforms vague learning intentions into structured,
          actionable project ideas — bridging the gap between "I want to build something" and
          "here's exactly what to build and how."
        </p>
      </div>

      {/* Feature grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`group p-6 rounded-2xl border border-subtle bg-surface hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 80 + 200}ms` }}
          >
            <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
              <f.icon size={18} className={f.color} />
            </div>
            <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
            <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Quote block */}
      <div
        className={`mt-10 p-8 rounded-2xl border-l-4 border-jade-500 bg-jade-50 dark:bg-jade-950/20 transition-all duration-700 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="font-display text-xl md:text-2xl italic text-primary leading-snug">
          "Vibe coding isn't just about speed — it's about lowering the barrier between
          an idea in your head and working software in the world."
        </p>
        <p className="mt-3 text-sm text-muted font-mono">— Project Philosophy</p>
      </div>
    </section>
  )
}
