"use client"

import React from "react"
import clsx from "clsx"
import { FaAws, FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import {
    SiD3,
    SiExpress,
    SiKubernetes,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql, SiPython, SiPytorch, SiSpring,
    SiSpringboot,
    SiTensorflow,
    SiTypescript,
} from "react-icons/si"

const ICONS = {
  java: FaJava,
  spring: SiSpringboot,
  react: FaReact,
  nextjs: SiNextdotjs,
  node: FaNodeJs,
  express: SiExpress,
  typescript: SiTypescript,
  python: FaPython,
  tensorflow: SiTensorflow,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  docker: FaDocker,
  kubernetes: SiKubernetes,
  aws: FaAws,
  d3: SiD3,
    pytorch: SiPytorch,
    springF: SiSpring,
} as const

export type IconKey = keyof typeof ICONS

export type SkillItem = {
  icon: IconKey
  label?: string
  color?: string
}

export interface SkillsMarqueeProps {
  title?: string
  items: SkillItem[]
  className?: string
}

export default function SkillsMarquee({ items, className }: SkillsMarqueeProps) {
  return (
    <ul
      className={clsx(
        "grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5",
        className,
      )}
    >
      {items.map(({ icon, label, color }, idx) => {
        const Icon = ICONS[icon]
        return (
          <li
            key={`${icon}-${idx}`}
            className="group relative flex flex-col items-start justify-between gap-8 border-b border-r border-border p-5 transition-colors hover:bg-white/[0.03]"
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-1 via-brand-3 to-brand-6 transition-all duration-300 group-hover:w-full"
            />
            <Icon
              aria-hidden
              className="h-8 w-8 text-muted-foreground transition-colors duration-300 group-hover:text-[var(--c,hsl(var(--foreground)))]"
              style={color ? ({ "--c": color } as React.CSSProperties) : undefined}
            />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
              {label || icon}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
