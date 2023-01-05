import { Colors } from '@/constants'
import React from 'react'
import Svg, { Color, Path } from 'react-native-svg'

export type IconArrowsProps = {
  color?: Color
}

export const IconArrows: React.FC<IconArrowsProps> = ({ color = Colors.contentText }) => (
  <Svg width='17' height='18' fill='none'>
    <Path
      d='M16.1 13.51a.496.496 0 00-.49-.502H2.566l2.17-2.238a.508.508 0 000-.705.479.479 0 00-.692 0l-2.998 3.091a.507.507 0 000 .705l2.998 3.09a.48.48 0 00.695 0 .508.508 0 000-.704l-2.17-2.238h13.048a.492.492 0 00.483-.499zM15.957 4.136h0L12.96 1.048a.479.479 0 00-.693 0 .508.508 0 000 .705l2.17 2.238H1.39a.496.496 0 00-.49.502c0 .275.216.502.49.502h13.047l-2.17 2.231h0a.508.508 0 000 .705.48.48 0 00.696 0l2.997-3.09a.51.51 0 00-.003-.705z'
      fill={color}
      // stroke={color}
      stroke-width='0.2'
    />
  </Svg>
)
