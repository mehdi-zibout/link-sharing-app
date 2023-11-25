import { ComponentProps } from 'react'

import classNames from 'src/utils/classNames'

const Card = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={classNames('rounded-xl bg-light-grey p-5', className)}
    >
      {children}
    </div>
  )
}

export default Card
