import { ComponentProps } from 'react'

import classNames from 'src/utils/classNames'

import { Button } from '../Button/Button'

const CardWithButton = ({
  children,
  className,
  buttonProps: { className: buttonClassName, ...buttonProps },
  ...props
}: ComponentProps<'div'> & { buttonProps: ComponentProps<typeof Button> }) => {
  return (
    <div {...props} className={classNames('rounded-xl bg-white', className)}>
      <div className="p-6 md:p-10">{children}</div>
      <div className="h-px w-full bg-borders" />
      <div className="p-4 md:flex md:justify-end md:px-10 md:py-6">
        <Button
          {...buttonProps}
          className={classNames('w-full md:w-fit', buttonClassName)}
        />
      </div>
    </div>
  )
}

export default CardWithButton
