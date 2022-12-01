import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const PersonIcon = (props: SvgProps) => {
  const { blue } = useTheme()

  return (
    <Svg
      width={18}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.038.39C4.93 1.316 4.063 2.922 4.2 5.654c.118 2.37.824 3.55 2.687 4.497 1.628.827 2.58.827 4.208 0 1.863-.946 2.568-2.127 2.687-4.497.138-2.763-.742-4.364-2.898-5.275-1.205-.51-2.668-.505-3.844.011ZM5.986 13.61c-1.963.53-4.557 1.785-5.352 2.589-.773.782-.847 1.753-.179 2.365.423.387 1.408.437 8.58.437 7.518 0 8.134-.035 8.535-.483 1.049-1.173.167-2.49-2.51-3.75-3.306-1.558-6.22-1.93-9.074-1.158Z"
        fill={blue}
      />
    </Svg>
  )
}
