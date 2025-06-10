import * as THREE from 'three'

export interface VantaEffect {
  destroy(): void
}

interface VantaBirdsOptions {
  el: HTMLElement | null
  THREE: typeof THREE
  mouseControls?: boolean
  touchControls?: boolean
  gyroControls?: boolean
  minHeight?: number
  minWidth?: number
  scale?: number
  scaleMobile?: number
  backgroundColor?: number
  color1?: number
  color2?: number
  colorMode?: string
  birdSize?: number
  wingSpan?: number
  speedLimit?: number
  separation?: number
  alignment?: number
  cohesion?: number
  quantity?: number
}

declare module 'vanta/dist/vanta.birds.min' {
  function BIRDS(options: VantaBirdsOptions): VantaEffect
  export default BIRDS
}