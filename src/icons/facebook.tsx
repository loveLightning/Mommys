import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const FacebookIcon = (props: SvgProps) => {
  const { saturated_blue } = useTheme()

  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.187.307C5.891 1.69 1.524 6.13.177 12.536c-.236 2.374-.236 2.51 0 5.022C1.415 23.526 5.491 28.003 11.06 29.53l1.347.364V19.414h-3.64v-4.367h3.64v-2.148c0-5.204 2.62-7.715 7.497-7.096l1.965.218v3.93h-1.565c-2.147 0-2.802.765-2.802 3.203v1.893h4.112l-.254 1.674c-.11.946-.219 1.929-.219 2.183 0 .364-.546.51-1.82.51H17.5v10.518l1.93-.546c5.095-1.492 8.77-5.532 10.263-11.246.41-3.093.41-3.503 0-6.187C28.055 5.657 23.949 1.153 17.61.307c-3.066-.41-2.657-.41-5.423 0Z"
        fill={saturated_blue}
      />
    </Svg>
  )
}
