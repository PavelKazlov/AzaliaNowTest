import {Colors} from '@/constants'
import React from 'react'
import {CheckBox} from '@rneui/base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './styles'

export type CheckBoxProps = {
  checked: boolean
  onPress: (arg0: boolean) => void
}

export const TaskCheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  onPress,
}) => {
  return (
    <CheckBox
      checked={checked}
      onIconPress={() => onPress(!checked)}
      size={20}
      checkedIcon={
        <Icon
          name="check-square"
          onPress={() => onPress(!checked)}
          color={Colors.primaryButtonBackground}
          size={20}
          style={styles.checkedIcon}
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
      containerStyle={styles.checkBoxContainer}
      wrapperStyle={styles.wrapperStyle}
    />
  )
}
