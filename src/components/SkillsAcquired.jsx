import { useState } from 'react'
import { Code2, Globe, GitBranch, Layers, Bug, Cpu, Palette, Workflow } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const skills = [
  { label: 'React', icon: Code2, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/40', border: 'border-blue-200 dark:border-blue-900' },
  { label: 'API Integration', icon: Globe, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-950/40', border: 'border-green-200 dark:border-green-900' },
  { label: 'Prompt Engineering', icon: Cpu, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40', border: 'border-purple-200 dark:border-purple-900' },
  { label: 'UI/UX Design', icon: Palette, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-950/40', border: 'border-pink-200 dark:border-pink-900' },
  { label: 'Git / GitHub', icon: GitBranch, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/40', border: 'border-orange-200 dark:border-orange-900' },
  { label: 'Deployment', icon: Layers, color: 'text-jade-600 dark:text-jade-400', bg: 'bg-jade-50 dark:bg-jade-950/40', border: 'border-jade-200 dark:border-jade-900' },
  { label: 'Debugging', icon: Bug, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/40', border: 'border-red-200 dark:border-red-900' },
  { label: 'AI Workflow Design', icon: Workflow, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40', border: 'border-amber-200 dark:border-amber-900' },
]

function SkillBadge({ skill, index, parentVisible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border font-medium text-sm cursor-default
        transition-all duration-300 hover:-translate-y-1 hover:shadow-md select-none
        ${skill.bg} ${skill.border}
        ${parentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${index * 60 + 300}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <skill.icon
        size={15}
        className={`${skill.color} transition-transform duration-300 ${hovered ? 'scale-125 rotate-6' : ''}`}
      />
      <span className={skill.color}>{skill.label}</span>
    </div>
  )
}

// Mini browser mockup showing the skills UI
function SkillsMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-subtle shadow-xl bg-surface">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-ink-100 dark:bg-ink-900 border-b border-subtle">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4 text-xs font-mono text-muted bg-surface rounded px-3 py-1 truncate">
          skill-forward-vibe-coding-for-good-lilac.vercel.app
        </div>
      </div>
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="text-xs font-mono text-muted uppercase tracking-widest">Skills You'll Acquire</div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-center justify-center">
              <Code2 size={14} className="text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-primary">React</div>
              <div className="text-xs text-muted">Frontend Framework</div>
            </div>
            <div className="ml-auto">
              <div className="w-16 h-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 overflow-hidden">
                <div className="h-full w-4/5 rounded-full bg-blue-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 flex items-center justify-center">
              <Cpu size={14} className="text-purple-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-primary">Prompt Engineering</div>
              <div className="text-xs text-muted">AI Workflow</div>
            </div>
            <div className="ml-auto">
              <div className="w-16 h-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-purple-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-jade-50 dark:bg-jade-950/40 border border-jade-200 dark:border-jade-900 flex items-center justify-center">
              <Layers size={14} className="text-jade-600 dark:text-jade-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-primary">Deployment</div>
              <div className="text-xs text-muted">DevOps & CI/CD</div>
            </div>
            <div className="ml-auto">
              <div className="w-16 h-1.5 rounded-full bg-jade-100 dark:bg-jade-950/60 overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-jade-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2 text-xs text-muted border-t border-subtle">
          + 5 more skills unlocked with this project
        </div>
      </div>
    </div>
  )
}

export default function SkillsAcquired() {
  const [ref, visible] = useIntersection()

  return (
    <section ref={ref} className="py-24 bg-surface border-y border-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
                02 — Feature One
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
                Skills Acquired
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Every project idea now comes with a curated set of skills users will develop by
                building it. I designed and built this feature to connect project exploration
                with concrete career growth outcomes.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                The feature surfaces skill badges dynamically, helping learners understand not
                just <em>what</em> they're building — but <em>who they'll become</em> as a developer
                in the process.
              </p>
            </div>

            {/* Animated badges */}
            <div className="flex flex-wrap gap-2.5">
              {skills.map((s, i) => (
                <SkillBadge key={s.label} skill={s} index={i} parentVisible={visible} />
              ))}
            </div>

            {/* Impact metrics */}
            <div
              className={`mt-10 grid grid-cols-3 gap-4 transition-all duration-700 delay-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { value: '8+', label: 'Skills tracked' },
                { value: '100%', label: 'Reusable UI' },
                { value: '0ms', label: 'Load overhead' },
              ].map(m => (
                <div key={m.label} className="text-center p-3 rounded-xl bg-main border border-subtle">
                  <div className="font-display text-2xl font-bold text-jade-600 dark:text-jade-400">{m.value}</div>
                  <div className="text-xs text-muted mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mockup */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <SkillsMockup />
            {/* Implementation note */}
            <div className="mt-4 p-4 rounded-xl bg-main border border-subtle">
              <p className="text-xs font-mono text-muted leading-relaxed">
                <span className="text-jade-600 dark:text-jade-400">// Implementation</span><br />
                Responsive badge/tag UI · Reusable React components ·<br />
                Beginner-friendly UX · Tailwind CSS styling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
