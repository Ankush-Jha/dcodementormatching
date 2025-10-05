import { Button } from "@/components/ui/button"
import { Code2, ArrowRight, Users, Target, Zap, GitBranch, MessageSquare, TrendingUp } from "lucide-react"
import Link from "next/link"

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Code2 className="h-8 w-8 text-[color:var(--color-primary)]" strokeWidth={2.5} />
      </div>
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-[color:var(--color-foreground)]">D</span>
        <span className="text-[color:var(--color-primary)]">CODE</span>
      </span>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      {/* Navigation */}
      <nav className="border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/50 backdrop-blur-xl fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-foreground)] hover:bg-[color:var(--color-background)]"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] hover:bg-[color:var(--color-primary)]/90 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 grid-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="text-[color:var(--color-primary)] text-sm font-mono tracking-wider uppercase border border-[color:var(--color-primary)]/30 px-4 py-2 rounded-full">
                AI-Powered Mentorship Matching
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Connect with the <span className="text-[color:var(--color-primary)]">perfect mentor</span> for your
              journey
            </h1>

            <p className="text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto text-balance leading-relaxed">
              DCODE uses advanced AI algorithms to match open source newcomers with experienced mentors based on skills,
              goals, availability, and learning style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register?role=mentee">
                <Button
                  size="lg"
                  className="bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] hover:bg-[color:var(--color-primary)]/90 font-semibold text-lg px-8 h-14"
                >
                  Find a Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register?role=mentor">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[color:var(--color-primary)]/30 text-[color:var(--color-foreground)] hover:bg-[color:var(--color-primary)]/10 hover:border-[color:var(--color-primary)] text-lg px-8 h-14 bg-transparent"
                >
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-[color:var(--color-border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Match Success Rate" },
              { value: "500+", label: "Active Mentors" },
              { value: "1,200+", label: "Mentees Matched" },
              { value: "5,000+", label: "Contributions Made" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[color:var(--color-primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[color:var(--color-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-[color:var(--color-primary)]">DCODE</span> Works
            </h2>
            <p className="text-[color:var(--color-muted)] text-lg">
              A comprehensive platform designed for successful mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Smart Matching",
                description:
                  "AI-powered algorithm analyzes skills, goals, availability, and learning styles to find your perfect mentor match.",
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description:
                  "Set clear learning objectives and track your progress with measurable milestones and achievements.",
              },
              {
                icon: GitBranch,
                title: "GitHub Integration",
                description:
                  "Get personalized first issue recommendations from your mentor's repositories to start contributing.",
              },
              {
                icon: MessageSquare,
                title: "Built-in Communication",
                description: "Integrated chat, video calls, and scheduling tools to keep your mentorship on track.",
              },
              {
                icon: Zap,
                title: "Real-time Progress",
                description: "Track contributions, meetings, and skill development with comprehensive analytics.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "Transition from mentee to mentor as you grow, giving back to the community.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[color:var(--color-background)] border border-[color:var(--color-border)] rounded-lg p-6 hover:border-[color:var(--color-primary)]/30 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-[color:var(--color-primary)]/10 rounded-lg group-hover:bg-[color:var(--color-primary)]/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-[color:var(--color-primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-foreground)]">{feature.title}</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-[color:var(--color-border)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start your <span className="text-[color:var(--color-primary)]">open source journey</span>?
          </h2>
          <p className="text-xl text-[color:var(--color-muted)] mb-8">
            Join thousands of developers who have found their perfect mentor match
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] hover:bg-[color:var(--color-primary)]/90 font-semibold text-lg px-12 h-14"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[color:var(--color-border)] py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo />
            <div className="text-sm text-[color:var(--color-muted)]">
              © 2025 DCODE. Empowering open source mentorship.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
