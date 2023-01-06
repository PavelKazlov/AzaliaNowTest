import {Colors} from '@/constants'
// import {CheckBox} from '@rneui/base'
import {CheckBox} from '@rneui/themed'
import React, {useState} from 'react'
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// import {UncHeckedIcon as Icon} from 'react-native-vector-icons/Fontisto'
import {TaskCheckBox} from '../TaskCheckBox'
import {Typography} from '../Typography'
import {styles} from './styles'

export const TaskListItem = ({taskId, description}: any) => {
  const [checked, setChecked] = useState(false)
  const handlePressCheckBox = () => {
    console.log('HIIIII')
  }

  return (
    <View style={styles.container}>
      <TaskCheckBox checked={checked} onPress={setChecked} />

      <View style={{flex: 1, marginLeft: 10}}>
        <Typography.Default
          onPress={() => setChecked(!checked)}
          isChecked={checked}>
          {description}
        </Typography.Default>
      </View>
    </View>
  )
}
// import {Colors} from '@/constants'
// // import {CheckBox} from '@rneui/base'
// import {CheckBox} from '@rneui/themed'
// import React from 'react'
// import {
//   View,
//   Text,
//   Alert,
//   TouchableWithoutFeedback,
//   Pressable,
// } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
// // import {UncHeckedIcon as Icon} from 'react-native-vector-icons/Fontisto'
// import {TaskCheckBox} from '../TaskCheckBox'
// import {Typography} from '../Typography'
// import {styles} from './styles'

// export const TaskListItem = ({taskId, description}: any) => {
//   const [checked, setChecked] = React.useState(false)
//   const handlePressCheckBox = () => {
//     console.log('HIIIII')
//   }

//   return (
//     <View style={styles.container}>
//       <CheckBox
//         checked={checked}
//         onIconPress={() => setChecked(!checked)}
//         onPress={() => console.log('onPress()')}
//         size={20}
//         checkedIcon={
//           <Icon
//             name="check-square"
//             onPress={() => setChecked(!checked)}
//             color={Colors.primaryButtonBackground}
//             size={20}
//             style={{
//               height: 21,
//               width: 21,
//               top: 0,
//               left: 0,
//             }}
//           />
//         }
//         uncheckedIcon={
//           <Icon
//             name="check-square"
//             onPress={() => setChecked(!checked)}
//             color={Colors.primaryBackground}
//             size={20}
//           />
//         }
//         containerStyle={{
//           backgroundColor: Colors.primaryBackground,
//           margin: 0,
//           padding: 0,
//         }}
//         wrapperStyle={{
//           height: 20,
//           width: 20,
//           borderWidth: 2,
//           borderRadius: 6,
//           borderColor: Colors.primaryButtonBackground,
//           backgroundColor: Colors.primaryBackground,
//         }}
//       />

//       <View style={{flex: 1, marginLeft: 10}}>
//         <Typography.Default onPress={() => setChecked(!checked)}>
//           {description}
//         </Typography.Default>
//       </View>
//     </View>
//   )
// }
