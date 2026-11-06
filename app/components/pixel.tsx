import { cn } from "@/lib/utils"

/**
 * Pixel-art design elements built from the portfolio's own palette
 * (the blue → purple → pink hero gradient).
 */
const STRIPES = [
  "bg-brand-1",
  "bg-brand-2",
  "bg-brand-3",
  "bg-brand-4",
  "bg-brand-5",
  "bg-brand-6",
]

/** Stacked horizontal colour bands with pixel-stepped left edges. */
export function PixelStripe({
  className,
  stepped = true,
  reverse = false,
}: {
  className?: string
  stepped?: boolean
  /** Step from the right, with the widest band on top (used as a "ground" line) */
  reverse?: boolean
}) {
  const colors = reverse ? [...STRIPES].reverse() : STRIPES
  return (
    <div aria-hidden className={cn("w-full", className)}>
      {colors.map((color, i) => (
        <div
          key={color}
          className={cn("h-2 md:h-3", color)}
          style={stepped ? (reverse ? { marginRight: `${(colors.length - 1 - i) * 4}%` } : { marginLeft: `${i * 4}%` }) : undefined}
        />
      ))}
    </div>
  )
}

/** A staircase of square "pixels" fading through the palette. */
export function PixelStairs({ className }: { className?: string }) {
  const rows = STRIPES.length
  const cols = 8
  return (
    <div
      aria-hidden
      className={cn("grid gap-1 md:gap-1.5", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const filled = c >= cols - 3 - r
          const ghost = !filled && (c + r) % 3 === 0
          return (
            <div
              key={`${r}-${c}`}
              className={cn(
                "aspect-square transition-opacity duration-500",
                filled ? STRIPES[r] : ghost ? "border border-white/10" : "",
              )}
              style={filled ? { opacity: 0.55 + (c / cols) * 0.45 } : undefined}
            />
          )
        }),
      )}
    </div>
  )
}

/** Small square block used as a bullet / logo mark. */
export function PixelMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("inline-grid grid-cols-2 gap-0.5", className)}>
      <span className="h-2 w-2 bg-brand-1" />
      <span className="h-2 w-2 bg-brand-3" />
      <span className="h-2 w-2" />
      <span className="h-2 w-2 bg-brand-6" />
    </span>
  )
}

/** Numbered section header: mono eyebrow + big title + optional intro. */
export function SectionHeading({
  index,
  label,
  title,
  intro,
}: {
  index: string
  label: string
  title: string
  intro?: string
}) {
  return (
    <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-[1fr_1fr] md:gap-12">
      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-brand-soft">{index}</span> / {label}
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
      </div>
      {intro && (
        <p className="self-end text-lg text-muted-foreground md:text-xl/relaxed">{intro}</p>
      )}
    </div>
  )
}
