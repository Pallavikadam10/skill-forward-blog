import { useState } from 'react'
import { Shuffle, ChevronRight, Sparkles } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const originalIdea = 'AI-powered volunteer coordination platform'

const variationSets = [
  [
    { label: 'Volunteer scheduling app for schools', tag: 'EdTech', color: 'text-blue-600', tagBg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900' },
    { label: 'Disaster relief coordination tool', tag: 'Crisis', color: 'text-red-600', tagBg: 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900' },
    { label: 'Community help platform for neighborhoods', tag: 'Civic', color: 'text-jade-600', tagBg: 'bg-jade-50 dark:bg-jade-950/40 border-jade-200 dark:border-jade-900' },
    { label: 'Nonprofit volunteer matching system', tag: 'Nonprofit', color: 'text-purple-600', tagBg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900' },
  ],
  [
    { label: 'Senior citizen companion matching app', tag: 'Elder Care', color: 'text-amber-600', tagBg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900' },
    { label: 'Environmental cleanup organizer', tag: 'Climate', color: 'text-green-600', tagBg: 'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-900' },
    { label: 'Animal shelter volunteer portal', tag: 'Animal', color: 'text-orange-600', tagBg: 'bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900' },
    { label: 'Mental health peer support network', tag: 'Health', color: 'text-pink-600', tagBg: 'bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-900' },
  ],
]

function VariationCard({ item, index, visible }) {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border border-subtle bg-surface hover:border-jade-300 dark:hover:border-jade-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 cursor-default ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      }`}
      style={{ transitionDelay: `${index * 80 + 400}ms` }}
    >
      <ChevronRight size={14} className="text-jade-500 flex-shrink-0" />
      <span className="text-sm text-primary flex-1">{item.label}</span>
      <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${item.tagBg} ${item.color}`}>
        {item.tag}
      </span>
    </div>
  )
}

export default function GenerateVariations() {
  const [ref, visible] = useIntersection()
  const [setIndex, setSetIndex] = useState(0)
  const [generating, setGenerating] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => {
      setSetIndex(i => (i + 1) % variationSets.length)
      setGenerating(false)
    }, 600)
  }

  return (
    <section ref={ref} className="py-24 max-w-5xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Interactive demo */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          <div className="rounded-2xl border border-subtle bg-surface overflow-hidden shadow-xl">
            {/* Header */}
            <div className="px-6 py-5 border-b border-subtle flex items-center justify-between bg-main">
              <div>
                <div className="text-xs font-mono text-muted uppercase tracking-widest mb-1">Original Idea</div>
                <div className="text-sm font-medium text-primary">{originalIdea}</div>
              </div>
              <Sparkles size={18} className="text-amber-500" />
            </div>

            {/* Variations */}
            <div className="p-5 space-y-2.5">
              <div className="text-xs font-mono text-muted uppercase tracking-widest mb-3">
                Generated Variations
              </div>
              {variationSets[setIndex].map((item, i) => (
                <VariationCard key={`${setIndex}-${i}`} item={item} index={i} visible={true} />
              ))}
            </div>

            {/* Generate button */}
            <div className="px-5 pb-5">
              <button
                onClick={handleGenerate}
                disabled={generating}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-200
                  ${generating
                    ? 'bg-jade-50 dark:bg-jade-950/20 text-jade-400 cursor-not-allowed'
                    : 'bg-jade-600 hover:bg-jade-700 text-white hover:shadow-lg hover:shadow-jade-600/20 hover:-translate-y-0.5'
                  }`}
              >
                <Shuffle size={15} className={generating ? 'animate-spin' : ''} />
                {generating ? 'Generating…' : 'Generate More Variations'}
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-center text-muted font-mono">
            ↑ Interactive demo — try clicking Generate
          </p>
        </div>

        {/* Right: Content */}
        <div>
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-jade-600 dark:text-jade-400 mb-3 block">
              03 — Feature Two
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
              Generate Variations
            </h2>
            <p className="text-secondary leading-relaxed mb-5">
              A single idea is just a starting point. I built the Generate Variations feature to
              help users break out of "blank page paralysis" by seeing 4–6 related interpretations
              of any project concept — instantly.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              This feature transforms broad, vague ideas into concrete, scoped implementations — each
              with a distinct angle, audience, or domain. Users can explore, compare, and commit to
              the variation that resonates most.
            </p>
          </div>

          {/* Purpose list */}
          <div
            className={`space-y-3 transition-all duration-700 delay-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { title: 'Creative Expansion', desc: 'Breaks mental blocks by showing multiple angles on one core idea.' },
              { title: 'Practical Scoping', desc: 'Refines abstract concepts into specific, buildable implementations.' },
              { title: 'Deeper Exploration', desc: 'Encourages experimentation before committing to a direction.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-xl border border-subtle bg-main hover:border-jade-300 dark:hover:border-jade-700 transition-colors duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-jade-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-sm text-primary mb-1">{item.title}</div>
                  <div className="text-sm text-secondary">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
