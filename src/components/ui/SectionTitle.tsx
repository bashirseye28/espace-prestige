'use client'

import { cn } from '@/lib/utils'

type SectionTitleProps = {
  title: string
  center?: boolean
  className?: string
}

export default function SectionTitle({ title, center = false, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-3xl sm:text-4xl font-heading font-semibold text-primary mb-12',
        center ? 'text-center' : 'text-left',
        className
      )}
    >
      {title}
    </h2>
  )
}