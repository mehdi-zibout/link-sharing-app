import * as React from 'react'
import { SVGProps } from 'react'
const DragHandler = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 6"
    fill="none"
    {...props}
  >
    <path fill="#737373" d="M0 0h12v1H0zm0 5h12v1H0z" />
  </svg>
)
export default DragHandler
