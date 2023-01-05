import { Colors } from '@/constants'
import React from 'react'
import Svg, { ClipPath, Color, Defs, G, Path } from 'react-native-svg'

type IconBullionProps = {
  color?: Color
}

export const IconBullion: React.FC<IconBullionProps> = ({ color = Colors.primary }) => (
  <Svg width='25' height='23' fill='none'>
    <G clip-path='url(#clip0)'>
      <Path
        d='M24.1 7l-2.5-4.2-.1-.1L17 .2c-.1-.1-.3-.1-.5 0l-14 12-.1.1-2.2 5c-.1.2 0 .4.2.5L8.1 22h.2L24 7.5c.2-.1.2-.4.1-.5zm-7.2-5.9l3.6 2L8 14.4l-4.4-1.9L16.9 1.1zM1.1 17.4L3 13.1l4.6 2 .3 5.9-6.8-3.6zm7.6 3.4L8.5 15l6.8-6.1 5.9-5.3 2.1 3.5L8.7 20.8z'
        fill={color}
        stroke={color}
        stroke-width='0.3'
        stroke-miterlimit='10'
      />
    </G>
    <Defs>
      <ClipPath id='clip0'>
        <Path fill='white' d='M0 0h24.3v22.2H0z' />
      </ClipPath>
    </Defs>
  </Svg>
)
