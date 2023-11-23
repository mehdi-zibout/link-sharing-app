import { ComponentProps, SVGProps, forwardRef } from 'react'

import {
  FieldError,
  type UseRegisterProps,
  useErrorStyles,
  useRegister,
} from '@redwoodjs/forms'

interface InputProps extends ComponentProps<'input'> {
  label: string
  Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
  validation?: UseRegisterProps['validation']
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, name, Icon, validation, onBlur, onChange, type, ...props },
    ref
  ) => {
    const register = useRegister({
      name,
      onBlur,
      onChange,
      type,
      validation,
    })

    const { className: labelClassName } = useErrorStyles({
      className: `text-bs text-dark-grey mb-1 transition duration-300`,
      errorClassName: `text-bs mb-1 text-red transition duration-300`,
      name,
    })

    const { className: inputClassName } = useErrorStyles({
      className: `w-full rounded-lg py-3 pr-4 pl-11 border border-borders placeholder:text-dark-grey text-dark-grey bg-white leading-[150%] text-bm placeholder:opacity-50 hover:border-purple hover:shadow-app focus:shadow-app focus:border-purple outline-none transition duration-300`,
      errorClassName: `w-full rounded-lg py-3 pr-4 pl-11 border bg-white leading-[150%] text-bm placeholder:opacity-50   focus:border-red outline-none transition duration-300 border-red text-red`,
      name,
    })
    return (
      <div>
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <div className="relative">
          <input
            className={inputClassName}
            id={name}
            type={type}
            ref={ref}
            {...props}
            {...register}
          />
          <Icon className="absolute inset-y-0 left-4 top-px my-auto h-4 w-4" />
          <FieldError
            name={name}
            className="absolute inset-y-0 right-4 my-auto block h-fit text-bs text-red"
          />
        </div>
      </div>
    )
  }
)

export default Input
