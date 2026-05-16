import { ArrowRight, Telescope } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const improvements = [
  {
    title: 'Skill Progression Tracking',
    desc: 'Allow users to mark skills as learned and track their progression over time across multiple projects.',
    priority: 'High',
  },
  {
    title: 'Personalized Variation Filters',
    desc: 'Let users filter generated variations by domain (EdTech, Health, Climate), team size, or technology preference.',
    priority: 'High',
  },
  {
    title: 'AI Skill Confidence Scores',
    desc: 'Attach confidence percentages to each skill badge, driven by the LLM\'s assessment of how deeply the project exercises that skill.',
    priority: 'Medium',
  },
  {
    title: 'Save & Compare Variations',
    desc: 'Enable users to bookmark favorite variations and compare them side-by-side before committing to a direction.',
    priority: 'Medium',
  },
  {
    title: 'GitHub Integration',
    desc: 'One-click scaffold generation — create a GitHub repo and starter boilerplate directly from a chosen project variation.',
    priority: 'Future',
  },
]

const priorityStyle = {
  High: 'text-red-600 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
  Medium: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
  Future: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
}

export function FutureImprovements() {
  const [ref, visible] = useIntersection()

  return (
    <section ref={ref} className="py-24 max-w-5xl mx-auto px-6">
      <div
        className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
          07 — Roadmap
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          Future Improvements
        </h2>
        <p className="text-secondary text-lg max-w-2xl">
          The features I shipped are v1. Here's what v2 looks like.
        </p>
      </div>

      <div className="space-y-4">
        {improvements.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-start gap-5 p-5 rounded-2xl border border-subtle bg-surface hover:border-jade-300 dark:hover:border-jade-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${i * 80 + 200}ms` }}
          >
            <div className="w-8 h-8 rounded-xl bg-jade-50 dark:bg-jade-950/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Telescope size={15} className="text-jade-600 dark:text-jade-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1.5">
                <h3 className="font-semibold text-sm text-primary">{item.title}</h3>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${priorityStyle[item.priority]}`}>
                  {item.priority}
                </span>
              </div>
              <p className="text-sm text-secondary">{item.desc}</p>
            </div>
            <ArrowRight size={14} className="text-muted mt-1 flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}

export function FinalThoughts() {
  const [ref, visible] = useIntersection()

  return (
    <section ref={ref} className="py-24 bg-surface border-y border-subtle">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
            08 — Closing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
            Final Thoughts
          </h2>
        </div>

        <div
          className={`space-y-5 text-left transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-secondary text-lg leading-relaxed">
            Contributing to Skill Forward was more than a coding exercise — it was a lesson in what
            shipping real software actually requires: understanding the codebase, communicating with
            teammates, debugging under uncertainty, and caring about the user on the other side.
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            The two features I built — Skills Acquired and Generate Variations — are small in lines
            of code but large in learning value. They represent the kind of product thinking that
            separates good developers from great ones: building features that genuinely help users
            grow, not just features that technically work.
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            If you're a learner reading this: the best way to gain real engineering experience is to
            contribute to a real project. Find a team, ship something imperfect but working, and
            iterate. The skills compound faster than you expect.
          </p>
        </div>

        {/* Signature */}
        <div
          className={`mt-12 pt-8 border-t border-subtle transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-display text-2xl italic text-jade-600 dark:text-jade-400">
            "Build things that matter, with people who care."
          </p>
        </div>
      </div>
    </section>
  )
}
