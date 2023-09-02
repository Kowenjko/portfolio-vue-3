export interface Developer {
  name: string
  progress: number
}

export interface Progress {
  start: boolean
  title: string
  icon: string
  developers: Developer[]
}
