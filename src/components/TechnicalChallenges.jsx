import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const challenges = [
  {
    problem: 'Dependency version conflicts between React, Vite, and Tailwind during initial setup caused build failures.',
    solution: 'Systematically locked package versions, cleared node_modules, and rebuilt from a clean state using exact version specifiers in package.json.',
    difficulty: 'Medium',
  },
  {
    problem: 'Getting the AI-generated skill data to render dynamically without hardcoding the badge components.',
    solution: 'Designed a data-driven component architecture where badge props are derived from a skills config array, making the UI fully declarative.',
    difficulty: 'Medium',
  },
  {
    problem: 'Vercel deployment environment had different Node.js version constraints than local development.',
    solution: 'Added a .nvmrc file and pinned the Node.js version in Vercel project settings to match the local environment.',
    difficulty: 'Hard',
  },
  {
    problem: 'Collaborating on shared components via GitHub without breaking other contributors\' feature branches.',
    solution: 'Used feature branches, small focused commits, and PR-based workflow with clear naming conventions to avoid merge conflicts.',
    difficulty: 'Easy',
  },
]

const difficultyColor = {
  Easy: 'text-jade-600 dark:text-jade-400 bg-jade-50 dark:bg-jade-950/40 border-jade-200 dark:border-jade-900',
  Medium: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
  Hard: 'text-red-600 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
}

export default function TechnicalChallenges() {
  const [ref, visible] = useIntersection()

  return (
    <section ref={ref} className="py-24 bg-surface border-y border-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
            04 — Obstacles
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Technical Challenges
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Real engineering involves friction. Here are the concrete problems I hit — and exactly how I resolved them.
          </p>
        </div>

        <div className="space-y-5">
          {challenges.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-subtle bg-main overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-subtle">
                {/* Problem */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={14} className="text-amber-500" />
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-600">Problem</span>
                    <span className={`ml-auto text-xs font-mono px-2 py-0.5 rounded-full border ${difficultyColor[c.difficulty]}`}>
                      {c.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{c.problem}</p>
                </div>

                {/* Solution */}
                <div className="p-6 bg-jade-50/40 dark:bg-jade-950/10">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={14} className="text-jade-600 dark:text-jade-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400">Solution</span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{c.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
