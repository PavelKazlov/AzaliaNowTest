import {AddNewTask} from '@/assets'
import {Button, Logotype, TaskListItem} from '@/components'
import {Colors, Screens, statesAbbreviation} from '@/constants'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {styles} from './styles'

export const TasksListScreen = () => {
  const navigation = useNavigation()
  const onAddTaskPressHandler = () =>
    navigation.navigate(Screens.taskCreationScreen, {
      headerTitle: 'Вернуться назад',
    })

  return (
    // <SafeAreaView style={styles.container}>
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
      <FlatList
        style={{
          flex: 1,
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
        data={statesAbbreviation}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskListItem
            id={item.id}
            taskId={item.id}
            description={item.title}
          />
        )}
      />
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
    // </SafeAreaView>
  )
}
