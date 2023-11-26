import { RefObject, useRef } from 'react'

import { useReactiveVar } from '@apollo/client'

import { optimisticSession } from 'src/SessionContext/SessionContext'

import Card from '../Card/Card'
import PlatformLink from '../PlatformLink/PlatformLink'

const MobilePreview = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const svgWidth = svgRef.current?.getBBox().width
  const svgHeight = svgRef.current?.getBBox().height
  const session = useReactiveVar(optimisticSession)
  const initialLinksNumber = svgHeight
    ? Math.floor((svgHeight - 0.6 * svgHeight) / 64)
    : 5
  console.log(svgHeight ? initialLinksNumber : 'initialLinksNumber')

  return (
    <Card className="hidden  bg-white p-6 xl:block xl:h-[calc(100vh-183.5px)] ">
      <div className="relative flex h-full w-full items-center justify-center ">
        <PhoneFrameSVG svgRef={svgRef} />
        <div
          style={{
            width: svgWidth,
            height: svgHeight,
          }}
          className="absolute inset-0 m-auto flex flex-col items-center justify-center p-6  pb-[53.5px] pt-[63.5px]"
        >
          {session.profilePicture ? (
            <img
              src={session.profilePicture}
              alt="avatar"
              className="h-24 w-24 flex-shrink-0 rounded-full border-[4px] border-purple"
            />
          ) : (
            <div className="h-24 w-24 flex-shrink-0 rounded-full bg-[#EEEEEE]" />
          )}
          {session.firstName || session.lastName ? (
            <span className="mt-[25px] text-center text-lg font-semibold text-dark-grey">
              {session.firstName} {session.lastName}
            </span>
          ) : (
            <div className="mt-[25px] h-4 w-40 flex-shrink-0 rounded-[104px] bg-[#EEEEEE]" />
          )}
          {session.publicEmail ? (
            <span className="mt-2 text-center text-sm text-grey">
              {session.publicEmail}
            </span>
          ) : (
            <div className="mt-[13px] h-2 w-[72px] flex-shrink-0 rounded-[104px] bg-[#EEEEEE]" />
          )}
          <ul
            className="mt-14 space-y-5 overflow-y-auto"
            style={{
              height: svgHeight ? svgHeight - 0.6 * svgHeight : undefined,
            }}
          >
            {new Array(
              Math.max(session?.links?.length ?? 0, initialLinksNumber)
            )
              .fill(0)
              .map((_, index) => index)
              .map((index) =>
                index < session?.links?.length ?? 0 ? (
                  <li
                    key={index}
                    style={{ width: svgWidth ? svgWidth * 0.84 : undefined }}
                    className="mx-auto flex items-center justify-center  px-[24.5px]"
                  >
                    <PlatformLink
                      path={session.links[index].path}
                      platformId={session.links[index].platform}
                    />
                  </li>
                ) : (
                  <li
                    key={index}
                    style={{ width: svgWidth ? svgWidth * 0.84 : undefined }}
                    className="mx-auto flex items-center justify-center  px-[24.5px]"
                  >
                    <div className="h-11 w-[237px] rounded-lg bg-[#EEEEEE]" />
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default MobilePreview

function PhoneFrameSVG({ svgRef }: { svgRef: RefObject<SVGSVGElement> }) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 308 632"
      fill="none"
      className="h-full max-h-[631px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        stroke="#737373"
      />
      <path
        d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        fill="#fff"
        stroke="#737373"
      />
    </svg>
  )
}
