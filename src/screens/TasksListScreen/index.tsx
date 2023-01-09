import {AddNewTask} from '@/assets'
import {Button, Logotype, TaskListItem} from '@/components'
import {Colors, Screens, statesAbbreviation} from '@/constants'
import {selectTasksArray} from '@/selectors'
import {clearTasksArray} from '@/slices'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {styles} from './styles'

export const TasksListScreen = () => {
  const navigation = useNavigation()
  const activeTasksArray = useSelector(selectTasksArray)
  const dispatch = useDispatch()

  const onAddTaskPressHandler = () =>
    navigation.navigate(Screens.taskCreationScreen, {
      headerTitle: 'Вернуться назад',
    })

  // const onClearTaskPressHandler = () => dispatch(clearTasksArray())

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingTop: 85,
          paddingBottom: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Logotype />
      </View>
      {activeTasksArray.length > 0 ? (
        <FlatList
          style={{
            flex: 1,
            width: '100%',
          }}
          showsVerticalScrollIndicator={false}
          data={activeTasksArray}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TaskListItem
              id={item.id}
              taskId={item.id}
              description={item.task}
            />
          )}
        />
      ) : null}

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: 25,
          marginRight: 25,
        }}>
        <TouchableOpacity
          onPress={onAddTaskPressHandler}
          style={{
            alignItems: 'flex-end',
          }}>
          <AddNewTask fill={Colors.primaryButtonBackground} />
        </TouchableOpacity>
      </View>

      {/* <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          marginBottom: 25,
          marginLeft: 25,
        }}>
        <TouchableOpacity
          onPress={onClearTaskPressHandler}
          style={{
            alignItems: 'flex-end',
          }}>
          <AddNewTask fill={Colors.primaryButtonBackground} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}
