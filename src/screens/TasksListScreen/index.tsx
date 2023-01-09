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
              activeTasksArray={activeTasksArray}
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
    </View>
  )
}
