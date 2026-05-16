import { ExternalLink, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export function CTA() {
  const [ref, visible] = useIntersection()

  return (
    <section ref={ref} className="py-32 max-w-5xl mx-auto px-6">
      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-jade-600 to-jade-800 dark:from-jade-700 dark:to-jade-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative px-8 py-16 md:px-16 text-center">
          <div className="inline-flex items-center gap-2 text-jade-200 text-xs font-mono uppercase tracking-widest mb-6 border border-jade-500 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-jade-300 animate-pulse-slow" />
            Open to Opportunities
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build Something
            <br />
            <em className="text-jade-200">Meaningful</em> Together
          </h2>

          <p className="text-jade-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're building an AI product, need a frontend collaborator, or want to discuss
            vibe coding — I'm always up for a good conversation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://skill-forward-vibe-coding-for-good-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-jade-800 font-semibold px-7 py-3.5 rounded-xl hover:bg-jade-50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              View Live Platform
              <ExternalLink size={15} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 border border-jade-400 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
              <Mail size={15} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex justify-center gap-5">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: ArrowUpRight, href: 'https://skill-forward-vibe-coding-for-good-lilac.vercel.app/', label: 'Platform' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-jade-500 flex items-center justify-center text-jade-200 hover:text-white hover:border-jade-300 hover:bg-white/10 transition-all duration-200"
                aria-label={s.label}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-subtle py-10 max-w-5xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="font-display font-semibold text-primary">
          Skill<span className="text-jade-600 dark:text-jade-400">Forward</span>
          <span className="text-muted font-sans font-normal ml-2 text-xs">Engineering Blog</span>
        </div>
        <p className="text-xs font-mono">
          Built with React · Vite · Tailwind CSS · Deployed on Netlify
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  )
}
