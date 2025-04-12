// components/ui/slider.tsx
'use client'
import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

export function Slider({ value, onValueChange }: { value: number[], onValueChange: (value: number[]) => void }) {
  return (
    <SliderPrimitive.Root
      className="relative flex w-full touch-none select-none items-center"
      value={value}
      onValueChange={onValueChange}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-300">
        <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-blue-500 ring-2 ring-white" />
    </SliderPrimitive.Root>
  )
}
