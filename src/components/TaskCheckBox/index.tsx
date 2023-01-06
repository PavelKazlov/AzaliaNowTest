import {Colors} from '@/constants'
import React from 'react'
import {GestureResponderEvent} from 'react-native'
import {CheckBox} from '@rneui/base'
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './styles'

export type CheckBoxProps = {
  checked: boolean
  onPress: (arg0: boolean) => void
  // onPress?: any
}

export const TaskCheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  onPress,
}) => {
  return (
    <CheckBox
      checked={checked}
      onIconPress={() => onPress(!checked)}
      // onIconPress={onPress?.bind(this, !checked)}
      // onPress={() => console.log('onPress()')}
      size={20}
      checkedIcon={
        <Icon
          name="check-square"
          onPress={() => onPress(!checked)}
          color={Colors.primaryButtonBackground}
          size={20}
          style={{
            height: 21,
            width: 21,
            top: 0,
            left: 0,
          }}
        />
      }
      uncheckedIcon={
        <Icon
          name="check-square"
          onPress={() => onPress(!checked)}
          color={Colors.primaryBackground}
          size={20}
        />
      }
      containerStyle={{
        backgroundColor: Colors.primaryBackground,
        margin: 0,
        padding: 0,
      }}
      wrapperStyle={{
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: Colors.primaryButtonBackground,
        backgroundColor: Colors.primaryBackground,
      }}
    />
  )
}
// import * as React from 'react'
// import {CheckBox} from '@rneui/base'

// export default () => {
//   const [checked, setChecked] = React.useState(false)
//   return (
//     <CheckBox
//       checked={checked}
//       checkedColor="#0F0"
//       checkedTitle="Great!"
//       containerStyle={{width: '75%'}}
//       onIconPress={() => setChecked(!checked)}
//       onLongIconPress={() => console.log('onLongIconPress()')}
//       onLongPress={() => console.log('onLongPress()')}
//       onPress={() => console.log('onPress()')}
//       size={30}
//       textStyle={{}}
//       title="Check for Awesomeness"
//       titleProps={{}}
//       uncheckedColor="#F00"
//     />
//   )
// }
