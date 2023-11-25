import { useId } from 'react'

import * as Select from '@radix-ui/react-select'
import { Platform } from 'types/graphql'

import ChevronDownIcon from 'src/assets/ChevronDownIcon'
import LinkIcon from 'src/assets/LinkIcon'
import classNames from 'src/utils/classNames'
import platforms from 'src/utils/PlatformsData'

type PlatformsDropdownProps = {
  value: Platform
  onChange: (platform: Platform) => void
}

const PlatformsDropdown = ({ onChange, value }: PlatformsDropdownProps) => {
  const id = useId()
  const SelectecIcon = platforms.find((x) => x.id === value)?.Icon ?? LinkIcon
  return (
    <div className="">
      <label
        htmlFor={id}
        className={'mb-1 text-bs text-dark-grey transition duration-300'}
      >
        Platform
      </label>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          id={id}
          className="group flex w-full items-center justify-between rounded-lg border border-borders bg-white px-4 py-3 text-bm leading-[150%] text-dark-grey outline-none transition duration-300 placeholder:text-dark-grey placeholder:opacity-50 hover:border-purple hover:shadow-app focus:border-purple focus:shadow-app data-[state=open]:border-purple data-[state=open]:shadow-app"
          aria-label="Platform"
        >
          <div className="flex items-center gap-x-3">
            <SelectecIcon className="h-4 w-4 fill-grey" />
            <Select.Value />
          </div>
          <Select.Icon className="group-data-[state=open]:rotate-180">
            <ChevronDownIcon className="" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            side="bottom"
            sideOffset={8}
            sticky="always"
            className="rounded-lg bg-white px-4 py-3"
            style={{
              maxHeight: 'var(--radix-select-content-available-height)',
              width: 'var(--radix-select-trigger-width)',
              boxShadow: '0px 0px 32px 0px rgba(0, 0, 0, 0.10)',
            }}
          >
            <Select.Viewport>
              {platforms.map(({ id, Icon, label }, index) => (
                <Select.Item
                  key={id}
                  value={id}
                  className={classNames(
                    'border-b border-borders fill-grey py-3 text-dark-grey data-[highlighted]:fill-purple  data-[highlighted]:text-purple data-[highlighted]:outline-none',
                    {
                      'pt-0': index === 0,
                      'border-none pb-0': index === platforms.length - 1,
                    }
                  )}
                >
                  <div className="flex items-center gap-x-3  ">
                    <Icon className="h-4 w-4 fill-inherit" />
                    <Select.ItemText>
                      <span className="text-bm ">{label}</span>
                    </Select.ItemText>
                  </div>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default PlatformsDropdown
