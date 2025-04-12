// components/ui/button.tsx
'use client'
import * as React from 'react'

export function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
    >
      {children}
    </button>
  )
}
