import { Platform } from 'types/graphql'

import { Group272 } from 'src/assets/Platforms'
import platforms from 'src/utils/PlatformsData'

type PlatformLinkProps = {
  platformId: Platform
  path: string
}

const PlatformLink = ({ path, platformId }: PlatformLinkProps) => {
  const platform = platforms.find((platform) => platform.id === platformId)
  if (!platform) return
  if (platform.id === 'FRONTEND_MENTOR') {
    return (
      <a
        href={path}
        className="group mx-auto flex w-full max-w-[273px] items-center justify-between rounded-lg border border-borders bg-white p-4 text-bm text-dark-grey"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center gap-x-2">
          <Group272 className="h-5 w-5" />
          {platform.label}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="none"
          className="fill-dark-grey transition duration-300 group-hover:translate-x-2"
        >
          <path d="M2.667 7.334v1.333h8L7 12.334l.947.946L13.227 8l-5.28-5.28L7 3.667l3.667 3.667h-8Z" />
        </svg>
      </a>
    )
  }
  return (
    <a
      href={path}
      className="group mx-auto flex w-full max-w-[273px] items-center justify-between rounded-lg p-4 text-bm text-white"
      style={{ backgroundColor: platform.color }}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center gap-x-2">
        <platform.Icon className="h-5 w-5 fill-white" />
        {platform.label}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        className="fill-white transition duration-300 group-hover:translate-x-2"
      >
        <path d="M2.667 7.334v1.333h8L7 12.334l.947.946L13.227 8l-5.28-5.28L7 3.667l3.667 3.667h-8Z" />
      </svg>
    </a>
  )
}

export default PlatformLink
