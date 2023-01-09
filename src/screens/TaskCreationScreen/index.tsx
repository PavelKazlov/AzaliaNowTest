import React, {createRef, useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {styles} from './styles'
import {Input} from '@rneui/themed'
import {Colors} from '@/constants'
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

  const createFilteredArray = (arr: TasksStateItem) => {
    let newFilteredArray = [...activeTasksArray]
    newFilteredArray.push({...arr})
    dispatch(updateTasksArray(newFilteredArray))
  }
  // const createFilteredArray = (arr: any) => {
  //   let newFilteredArray = [...activeTasksArray]
  //   newFilteredArray.push({...arr})
  //   dispatch(updateTasksArray(newFilteredArray))
  // }

  const addTaskHandler = () => {
    const randomId = uuid.v4().toString()
    const newTaskObject: TasksStateItem = {id: randomId, task: inputValue}
    createFilteredArray(newTaskObject)
    input?.current?.blur()
    input?.current?.clear()
    setInputValue('')
  }

  // useEffect(() => {
  //   console.log('activeTasksArray => ', activeTasksArray)
  // }, [activeTasksArray])

  // const handleChange = (value: string) => {
  //   console.log('value => ', value)
  //   setInputValue(value)
  // }

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
// import React, {createRef, useEffect, useState} from 'react'
// import {Text, View} from 'react-native'
// import {styles} from './styles'
// import {Input} from '@rneui/themed'
// import {Colors} from '@/constants'
// import {Button} from '@/components'
// import uuid from 'react-native-uuid'
// import {useDispatch, useSelector} from 'react-redux'
// import {updateTasksArray} from '@/slices'
// import {selectTasksArray} from '@/selectors'

// export const TaskCreationScreen = ({route}: any) => {
//   const activeTasksArray = useSelector(selectTasksArray)
//   const [inputValue, setInputValue] = useState('')
//   const input = createRef()
//   const dispatch = useDispatch()
//   const [filteredArray, setFilteredArray] = useState(activeTasksArray)
//   console.log('activeTasksArray 2 => ', activeTasksArray)

//   const createFilteredArray = (arr: any) => {
//     let newFilteredArray = [...filteredArray]
//     newFilteredArray.push({...arr})
//     setFilteredArray(newFilteredArray)
//     dispatch(updateTasksArray(newFilteredArray))
//   }

//   const addTaskHandler = () => {
//     const randomId = uuid.v4().toString()
//     const newTaskObject = {id: randomId, task: inputValue}
//     createFilteredArray(newTaskObject)
//     input?.current?.blur()
//     input?.current?.clear()
//     setInputValue('')
//   }

//   useEffect(() => {
//     console.log('filteredArray => ', filteredArray)
//   }, [filteredArray])

//   // const handleChange = (value: string) => {
//   //   console.log('value => ', value)
//   //   setInputValue(value)
//   // }

//   return (
//     <View style={styles.container}>
//       <Input
//         ref={input}
//         value={inputValue}
//         onChangeText={val => setInputValue(val)}
//         placeholder="Текст новой задачи"
//         inputStyle={{padding: 12}}
//         containerStyle={{paddingHorizontal: 0}}
//         inputContainerStyle={{
//           borderWidth: 1,
//           borderColor: Colors.secondaryButtonBackground,
//           borderRadius: 8,
//           paddingLeft: 5,
//           height: 46,
//         }}
//       />
//       <Button disabled={inputValue === ''} onPress={addTaskHandler}>
//         Добавить
//       </Button>
//       <Text>{inputValue}</Text>
//     </View>
//   )
// }
