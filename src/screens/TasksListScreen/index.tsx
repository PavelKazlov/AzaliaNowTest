import {AddNewTask} from '@/assets'
import {Logotype, TaskListItem} from '@/components'
import {Colors, Screens} from '@/constants'
import {selectTasksArray} from '@/selectors'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {FlatList, TouchableOpacity, View} from 'react-native'
import {useSelector} from 'react-redux'
import {styles} from './styles'

export const TasksListScreen = () => {
  const navigation = useNavigation()
  const activeTasksArray = useSelector(selectTasksArray)

  const onAddTaskPressHandler = () =>
    navigation.navigate(Screens.taskCreationScreen, {
      headerTitle: 'Вернуться назад',
    })

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logotype />
      </View>
      {activeTasksArray.length > 0 ? (
        <FlatList
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          data={activeTasksArray}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TaskListItem
              id={item.id}
              taskId={item.id}
              description={item.task}
              activeTasksArray={activeTasksArray}
            />
          )}
        />
      ) : null}

      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={onAddTaskPressHandler}>
          <AddNewTask fill={Colors.primaryButtonBackground} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
