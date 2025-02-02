import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 shadow-sm hover:bg-slate-100 hover:text-slate-900 data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900"
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle } 