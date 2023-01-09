import {Colors} from '@/constants'
import React, {useState} from 'react'
import {View, Animated} from 'react-native'
import {TaskCheckBox} from '../TaskCheckBox'
import {Typography} from '../Typography'
import {styles} from './styles'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {useDispatch} from 'react-redux'
import {updateTasksArray} from '@/slices'
import {TrashBasket} from '@/assets'

const Basket = (options: any) => {
  const isLeftDirection = options?.leftDirection
  const scale = options?.scale
  return (
    <Animated.View style={styles.animatedContainer}>
      <Animated.View
        style={{
          marginLeft: isLeftDirection ? 20 : 'auto',
          marginRight: isLeftDirection ? 'auto' : 20,
          transform: [{scale}],
        }}>
        <TrashBasket fill={Colors.logo} />
      </Animated.View>
    </Animated.View>
  )
}

export const TaskListItem = ({...props}: ITaskListItemProps) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const {taskId, description, activeTasksArray} = props

  const swipeRight = (_: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1.4, 0.5],
      extrapolate: 'clamp',
    })
    return <Basket scale={scale} />
  }

  const swipeLeft = (_: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1.4],
      extrapolate: 'clamp',
    })
    return <Basket scale={scale} leftDirection />
  }

  const height = new Animated.Value(70)
  const animatedDelete = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      const newTaskArray = activeTasksArray.filter(item => item.id !== taskId)
      dispatch(updateTasksArray(newTaskArray))
    })
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={swipeRight}
        renderLeftActions={swipeLeft}
        rightThreshold={150}
        leftThreshold={150}
        onSwipeableOpen={animatedDelete}>
        <Animated.View style={styles.container}>
          <TaskCheckBox checked={checked} onPress={setChecked} />

          <View style={styles.description}>
            <Typography.Default
              onPress={() => setChecked(!checked)}
              isChecked={checked}>
              {description}
            </Typography.Default>
          </View>
        </Animated.View>
      </Swipeable>
    </GestureHandlerRootView>
  )
}
