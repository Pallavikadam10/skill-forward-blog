import { Code2, Shuffle, ArrowRight } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export default function Contribution() {
  const [ref, visible] = useIntersection()

  return (
    <section id="contribution" ref={ref} className="py-24 bg-surface border-y border-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
            My Contribution
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Two Features, One Mission
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            I joined the Skill Forward project as a frontend contributor and shipped two user-facing
            features that make the platform more educational, exploratory, and actionable for learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <a
            href="#skills-acquired"
            className={`group block p-8 rounded-2xl border-2 border-jade-200 dark:border-jade-900 bg-jade-50/40 dark:bg-jade-950/10 hover:border-jade-400 dark:hover:border-jade-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-jade-500/10 transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-2xl bg-jade-600 flex items-center justify-center mb-5">
              <Code2 size={22} className="text-white" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-2">
              Feature 01
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">
              Skills Acquired
            </h3>
            <p className="text-secondary text-sm leading-relaxed mb-5">
              Dynamic skill badges that surface what users will learn by building each project idea —
              connecting exploration with concrete career outcomes.
            </p>
            <div className="flex items-center gap-1.5 text-jade-600 dark:text-jade-400 text-sm font-medium group-hover:gap-3 transition-all">
              Read more <ArrowRight size={14} />
            </div>
          </a>

          {/* Feature 2 */}
          <a
            href="#variations"
            className={`group block p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/10 hover:border-amber-400 dark:hover:border-amber-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center mb-5">
              <Shuffle size={22} className="text-white" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-600 mb-2">
              Feature 02
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">
              Generate Variations
            </h3>
            <p className="text-secondary text-sm leading-relaxed mb-5">
              One idea becomes many. This feature generates multiple related interpretations of a
              project concept to spark creative exploration and reduce scope paralysis.
            </p>
            <div className="flex items-center gap-1.5 text-amber-600 text-sm font-medium group-hover:gap-3 transition-all">
              Read more <ArrowRight size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
