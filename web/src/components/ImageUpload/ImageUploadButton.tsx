import { ComponentProps, forwardRef } from 'react'

import classNames from 'src/utils/classNames'

type ImageUploadButtonProps = {
  imageUrl: string | undefined
} & ComponentProps<'button'>

const ImageUploadButton = forwardRef<HTMLButtonElement, ImageUploadButtonProps>(
  ({ imageUrl, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className={classNames(
          'group relative mb-6 flex h-[193px] w-[193px] flex-col items-center justify-center gap-y-2 overflow-hidden rounded-xl bg-light-purple fill-purple text-hs font-semibold text-purple',
          { 'hover:fill-white hover:text-white': imageUrl }
        )}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt="avatar"
            className="absolute inset-0 z-20 object-cover hover:bg-black group-hover:z-0"
          />
        )}
        <svg
          className={classNames('relative z-10 h-10 w-10', {
            'opacity-0 transition duration-300 group-hover:opacity-100':
              imageUrl,
          })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="inherit"
        >
          <path d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z" />
        </svg>
        <span
          className={classNames('relative z-10', {
            'opacity-0 transition duration-300 group-hover:opacity-100':
              imageUrl,
          })}
        >
          {imageUrl ? 'Change Image' : '+ Upload Image'}
        </span>
        {imageUrl && (
          <div className="absolute inset-0 h-full w-full bg-black opacity-0 transition duration-300 group-hover:opacity-50 " />
        )}
      </button>
    )
  }
)

export default ImageUploadButton
