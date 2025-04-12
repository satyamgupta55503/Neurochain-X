// components/ui/switch.tsx
'use client'
import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

export function Switch({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: (checked: boolean) => void }) {
  return (
    <SwitchPrimitives.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition"
    >
      <SwitchPrimitives.Thumb className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-6" />
    </SwitchPrimitives.Root>
  )
}
