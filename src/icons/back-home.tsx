import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const BackHomeIcon = (props: SvgProps) => {
  const { violet } = useTheme()

  return (
    <Svg
      width={30}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.104 2.604a134.98 134.98 0 0 0-5.417 5.55L0 11.099l5.358 5.455c4.32 4.4 5.562 5.453 6.415 5.446 1.016-.009 1.864-.902 1.864-1.962 0-.254-1.522-2.002-3.382-3.884l-3.382-3.422h11.096c11.658 0 12.031-.054 12.031-1.736 0-1.683-.373-1.737-12.031-1.737H6.873l3.382-3.422c1.86-1.882 3.382-3.63 3.382-3.884C13.637.918 12.789 0 11.832 0c-.703 0-1.805.77-3.728 2.604Z"
        fill={violet}
      />
    </Svg>
  )
}
