import React from 'react'
import Svg, {
  Defs,
  Path,
  RadialGradient,
  Stop,
  SvgProps,
} from 'react-native-svg'

export const InstagramIcon = (props: SvgProps) => {
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="m21.26 26.244-12.5.012a5.015 5.015 0 0 1-5.004-4.995l-.012-12.5a5.015 5.015 0 0 1 4.995-5.005l12.5-.012a5.015 5.015 0 0 1 5.005 4.995l.012 12.5c.003 2.75-2.245 5.002-4.995 5.005Z"
        fill="url(#a)"
      />
      <Path
        d="m21.26 26.244-12.5.012a5.015 5.015 0 0 1-5.004-4.995l-.012-12.5a5.015 5.015 0 0 1 4.995-5.005l12.5-.012a5.015 5.015 0 0 1 5.005 4.995l.012 12.5c.003 2.75-2.245 5.002-4.995 5.005Z"
        fill="url(#b)"
      />
      <Path
        d="M15 19.375A4.38 4.38 0 0 1 10.625 15 4.38 4.38 0 0 1 15 10.625 4.38 4.38 0 0 1 19.375 15 4.38 4.38 0 0 1 15 19.375Zm0-7.5A3.129 3.129 0 0 0 11.875 15 3.129 3.129 0 0 0 15 18.125 3.129 3.129 0 0 0 18.125 15 3.129 3.129 0 0 0 15 11.875ZM19.688 11.25a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"
        fill="#fff"
      />
      <Path
        d="M18.75 23.125h-7.5a4.38 4.38 0 0 1-4.375-4.375v-7.5a4.38 4.38 0 0 1 4.375-4.375h7.5a4.38 4.38 0 0 1 4.375 4.375v7.5a4.38 4.38 0 0 1-4.375 4.375Zm-7.5-15a3.129 3.129 0 0 0-3.125 3.125v7.5a3.129 3.129 0 0 0 3.125 3.125h7.5a3.129 3.129 0 0 0 3.125-3.125v-7.5a3.129 3.129 0 0 0-3.125-3.125h-7.5Z"
        fill="#fff"
      />
      <Defs>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.113 26.272) scale(28.0619)">
          <Stop stopColor="#FD5" />
          <Stop offset={0.328} stopColor="#FF543F" />
          <Stop offset={0.348} stopColor="#FC5245" />
          <Stop offset={0.504} stopColor="#E64771" />
          <Stop offset={0.643} stopColor="#D53E91" />
          <Stop offset={0.761} stopColor="#CC39A4" />
          <Stop offset={0.841} stopColor="#C837AB" />
        </RadialGradient>
        <RadialGradient
          id="b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(18.6331 0 0 12.4152 7.366 3.463)">
          <Stop stopColor="#4168C9" />
          <Stop offset={0.999} stopColor="#4168C9" stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}
