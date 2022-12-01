import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const MailIcon = (props: SvgProps) => {
  const { purple } = useTheme()

  return (
    <Svg
      width={24}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.737.652c-.405.359-.732.807-.726.996.006.19 2.706 1.821 6 3.626L12 8.556l5.989-3.282c3.294-1.805 5.994-3.437 6-3.626.006-.19-.32-.637-.726-.996L22.527 0H1.473L.736.652ZM0 9.824v5.872l.737.652.736.652h21.054l.736-.652.737-.652V9.824c0-4.625-.08-5.83-.375-5.674-.206.108-2.823 1.55-5.815 3.203-2.992 1.654-5.606 3.006-5.81 3.006-.204 0-2.818-1.352-5.81-3.006A1328.302 1328.302 0 0 0 .375 4.15C.08 3.995 0 5.2 0 9.824Z"
        fill={purple}
      />
    </Svg>
  )
}
