import type React from "react"
import type { Tech } from "@/app/content"
import { cn } from "@/lib/utils"

/** Monochrome tech label; the icon takes its brand colour on hover. */
export function TechTag({ tech, size = "sm" }: { tech: Tech; size?: "sm" | "md" }) {
  const { icon: Icon, name, color } = tech
  return (
    <li
      className={cn(
        "group/chip inline-flex items-center gap-2 border border-border font-mono uppercase tracking-wider text-muted-foreground transition-colors hover:border-brand-3 hover:text-foreground",
        size === "sm" ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-2 text-xs",
      )}
    >
      {Icon ? (
        <Icon
          aria-hidden
          className={cn(
            "transition-colors group-hover/chip:text-[var(--c,hsl(var(--foreground)))]",
            size === "sm" ? "h-4 w-4" : "h-5 w-5",
          )}
          style={color ? ({ "--c": color } as React.CSSProperties) : undefined}
        />
      ) : (
        <span aria-hidden className="h-1.5 w-1.5 bg-brand-3" />
      )}
      {name}
    </li>
  )
}
