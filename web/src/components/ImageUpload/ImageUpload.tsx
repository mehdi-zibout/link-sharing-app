import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { PickerInline } from 'filestack-react'

import ImageUploadButton from './ImageUploadButton'

type ImageUploadProps = {
  imageUrl?: string
  onChange: (imageUrl: string) => void
}

const ImageUpload = ({ onChange, imageUrl }: ImageUploadProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <ImageUploadButton imageUrl={imageUrl} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" />
        <Dialog.Content className="fixed inset-0 z-[70] m-auto h-fit max-w-lg">
          <PickerInline
            pickerOptions={{
              accept: 'image/*',
              imageMax: [1024, 1024],
            }}
            apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY ?? ''}
            onUploadDone={(res: any) => {
              onChange(res?.filesUploaded?.[0]?.url)
              setOpen(false)
            }}
          />
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ImageUpload
