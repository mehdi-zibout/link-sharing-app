import {
  Control,
  Controller,
  UseFieldArrayMove,
  UseFieldArrayRemove,
  UseFormRegister,
} from '@redwoodjs/forms'

import DragHandler from 'src/assets/DragHandlerIcon'
import LinkIcon from 'src/assets/LinkIcon'
import { LinksFormData } from 'src/pages/LinksPage/LinksPage'

import Card from '../Card/Card'
import Dropdown from '../Dropdown/PlatformsDropdown'
import Input from '../Input/Input'

type LinkInputProps = {
  register: UseFormRegister<LinksFormData>
  control: Control<LinksFormData>
  index: number
  move: UseFieldArrayMove
  remove: UseFieldArrayRemove
}

const LinkInput = ({ register, index, control, remove }: LinkInputProps) => {
  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <button className="">
            <DragHandler className="h-1.5 w-3" />
            <span className="sr-only">Reorder</span>
          </button>
          <span className="text-bm font-bold text-grey">Link #{index + 1}</span>
        </div>
        <button
          onClick={() => {
            remove(index)
          }}
          className="text-bm text-grey"
        >
          Remove
        </button>
      </div>
      <Controller
        control={control}
        name={`links.${index}.platform`}
        render={({ field }) => (
          <Dropdown value={field.value} onChange={field.onChange} />
        )}
      />
      <Input
        Icon={LinkIcon}
        label="Link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        {...register(`links.${index}.path`)}
      />
    </Card>
  )
}

export default LinkInput
