import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const ArrowIcon = (props: SvgProps) => {
  const { light_grey } = useTheme()

  return (
    <Svg
      width={8}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.085 3.024C1.327.266.95-.044.527.004.135.037.037.135.005.527c-.05.424.245.783 2.693 3.231L5.439 6.5 2.698 9.242C.25 11.69-.044 12.049.005 12.473c.032.392.13.49.522.522.424.05.8-.26 3.558-3.019C6.435 7.626 7.153 6.81 7.153 6.5c0-.31-.718-1.126-3.068-3.476Z"
        fill={light_grey}
      />
    </Svg>
  )
}
