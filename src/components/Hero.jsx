import { ArrowDown, ExternalLink, Calendar, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-jade-400/5 dark:bg-jade-400/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        {/* Meta row */}
        <div
          className="flex flex-wrap items-center gap-4 mb-10 opacity-0"
          style={{ animation: 'fadeUp 0.6s ease-out 0.1s forwards' }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-widest uppercase text-jade-600 dark:text-jade-400 bg-jade-50 dark:bg-jade-950/60 border border-jade-200 dark:border-jade-900 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-jade-500 animate-pulse-slow inline-block" />
            Engineering Blog
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
            <Calendar size={12} /> 2025
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
            <Clock size={12} /> 8 min read
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease-out 0.2s forwards' }}
        >
          Building AI Features
          <br />
          <em className="text-jade-600 dark:text-jade-400 not-italic">for Good</em>
          <span className="text-secondary font-normal">:</span>
          <br />
          <span className="text-secondary font-semibold text-3xl sm:text-4xl md:text-5xl">My Contribution to Vibe Coding</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-12 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease-out 0.35s forwards' }}
        >
          How I shipped two production features—Skills Acquired & Generate Variations—on an
          AI-powered platform that helps learners ideate, build, and grow through collaborative
          human-AI development.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-wrap gap-4 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease-out 0.5s forwards' }}
        >
          <a
            href="#contribution"
            className="inline-flex items-center gap-2 bg-jade-600 hover:bg-jade-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-jade-600/20 hover:-translate-y-0.5"
          >
            Read the Story
            <ArrowDown size={16} />
          </a>
          <a
            href="https://skill-forward-vibe-coding-for-good-lilac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-subtle hover:border-jade-300 dark:hover:border-jade-700 bg-surface/60 hover:bg-surface font-medium px-6 py-3 rounded-xl transition-all duration-200 text-secondary hover:text-primary hover:-translate-y-0.5"
          >
            Live Platform
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Floating badges */}
        <div
          className="mt-16 flex flex-wrap gap-2 opacity-0"
          style={{ animation: 'fadeIn 1s ease-out 0.7s forwards' }}
        >
          {['React', 'Vite', 'Tailwind CSS', 'AI Workflow', 'Prompt Engineering', 'Vercel', 'GitHub'].map((tag, i) => (
            <span
              key={tag}
              className="text-xs font-mono font-medium px-3 py-1.5 rounded-full bg-surface border border-subtle text-muted hover:text-primary hover:border-jade-300 dark:hover:border-jade-700 transition-colors cursor-default"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-mono text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
