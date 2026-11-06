import type { SkillGroup } from "@/app/content"
import { TechTag } from "./tech-tag"

/** Skills grouped by area: category label on the left, tags on the right. */
export default function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="border-b border-border">
      {groups.map((group, i) => (
        <div
          key={group.title}
          className="group grid gap-4 border-t border-border py-6 md:grid-cols-[260px_1fr] md:gap-10"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-brand-soft">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-mono text-sm uppercase tracking-widest">{group.title}</h3>
            {group.note && (
              <span className="bg-secondary px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {group.note}
              </span>
            )}
          </div>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((t) => (
              <TechTag key={t.name} tech={t} size="md" />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
