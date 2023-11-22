import { SVGProps } from 'react'

import {
  FieldError,
  type UseRegisterProps,
  useErrorStyles,
  useRegister,
} from '@redwoodjs/forms'

interface InputProps extends UseRegisterProps {
  label: string
  placeholder?: string
  Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element
}

const Input = ({ label, placeholder, name, Icon, ...props }: InputProps) => {
  const register = useRegister({
    name,
    ...props,
  })

  const { className: labelClassName } = useErrorStyles({
    className: `text-bs text-dark-grey mb-1 transition duration-300`,
    errorClassName: `text-bs mb-1 text-red transition duration-300`,
    name,
  })

  const { className: inputClassName } = useErrorStyles({
    className: `rounded-lg py-3 pr-4 pl-11 border border-borders placeholder:text-dark-grey text-dark-grey bg-white leading-[150%] text-bm placeholder:opacity-50 hover:border-purple hover:shadow-app focus:shadow-app focus:border-purple outline-none transition duration-300`,
    errorClassName: `rounded-lg py-3 pr-4 pl-11 border bg-white leading-[150%] text-bm placeholder:opacity-50   focus:border-red outline-none transition duration-300 border-red text-red`,
    name,
  })
  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <div className="relative w-fit">
        <input
          className={inputClassName}
          type="text"
          placeholder={placeholder}
          {...register}
        />
        <Icon className="w-4 h-4 absolute inset-y-0 my-auto top-px left-4" />
        <FieldError
          name={name}
          className="block h-fit absolute inset-y-0 my-auto right-4 text-red text-bs"
        />
      </div>
    </div>
  )
}

export default Input
