import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import classNames from 'src/utils/classNames'

const buttonVariants = cva(
  'rounded-lg px-[27px] py-[11px] text-hs transition duration-300  disabled:opacity-25 font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-purple text-white hover:bg-purple-hover',
        secondary:
          'border border-purple bg-white hover:bg-light-purple text-purple',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={classNames(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
