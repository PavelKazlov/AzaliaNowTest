import React, {createRef, useState} from 'react'
import {Text, View} from 'react-native'
import {styles} from './styles'
import {Input} from '@rneui/themed'
import {Colors} from '@/constants'
import {Button} from '@/components'

export const TaskCreationScreen = () => {
  const [inputValue, setInputValue] = useState('')
  const input = createRef()

  const handleChange = (value: string) => {
    console.log('value => ', value)
    setInputValue(value)
  }

  const addTaskHandler = () => {
    input?.current?.blur()
    input?.current?.clear()
    setInputValue('')
  }

  return (
    <View style={styles.container}>
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
      <Text>{inputValue}</Text>
    </View>
  )
}
