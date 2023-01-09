import React, {createRef, useEffect, useState} from 'react'
import {KeyboardAvoidingView, Text, View} from 'react-native'
import {styles} from './styles'
import {Input} from '@rneui/themed'
import {Colors, Common} from '@/constants'
import {Button} from '@/components'
import uuid from 'react-native-uuid'
import {useDispatch, useSelector} from 'react-redux'
import {updateTasksArray} from '@/slices'
import {selectTasksArray} from '@/selectors'

export const TaskCreationScreen = () => {
  const activeTasksArray = useSelector(selectTasksArray)
  const [inputValue, setInputValue] = useState('')
  const input = createRef()
  const dispatch = useDispatch()

  const createFilteredArray = (arr: ITasksStateItem) => {
    let newFilteredArray = [...activeTasksArray]
    newFilteredArray.push({...arr})
    dispatch(updateTasksArray(newFilteredArray))
  }

  const addTaskHandler = () => {
    const randomId = uuid.v4().toString()
    const newTaskObject: ITasksStateItem = {id: randomId, task: inputValue}
    createFilteredArray(newTaskObject)
    input?.current?.blur()
    input?.current?.clear()
    setInputValue('')
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{width: '100%'}}
        behavior={Common.ios ? 'position' : 'null'}
        keyboardVerticalOffset={Common.ios ? 200 : 0}>
        <Input
          ref={input}
          value={inputValue}
          onChangeText={val => setInputValue(val)}
          placeholder="Текст новой задачи"
          inputStyle={{padding: 12}}
          containerStyle={{paddingHorizontal: 0}}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: Colors.secondaryButtonBackground,
            borderRadius: 8,
            paddingLeft: 5,
            height: 46,
          }}
        />
        <Button disabled={inputValue === ''} onPress={addTaskHandler}>
          Добавить
        </Button>
      </KeyboardAvoidingView>
    </View>
  )
}
