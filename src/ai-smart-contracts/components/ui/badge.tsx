// components/ui/badge.tsx
'use client'
import * as React from 'react'

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
      {children}
    </span>
  )
}
