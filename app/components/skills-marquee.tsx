"use client"

import React from "react"
import clsx from "clsx"
import { FaAws, FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import {
    SiD3Dotjs,
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
  d3: SiD3Dotjs,
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
      <div className="container px-4 md:px-6 py-6">
        <div className="flex flex-col gap-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {items.map(({ icon, label, color }, idx) => {
              const Icon = ICONS[icon]
              return (
                <li key={`${icon}-${idx}`} className="group inline-flex items-center gap-2">
                  <Icon
                    aria-hidden
                    className="h-8 w-8 md:h-10 md:w-10 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={color ? { color } : undefined}
                  />
                  <span className="sr-only">{label || icon}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
  )
}
