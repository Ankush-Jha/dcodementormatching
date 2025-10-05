import { Code2 } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
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
