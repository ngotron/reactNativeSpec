import { useState } from "react"
import { Button, Text, View } from "react-native"
import Content from "./Content"
/*
  1. memo() = Higher Order Component (HOC)
  2. useCallback
  Hooks 
  HOC
  render props
  memo để quyết định một props của component => Quyết định lại có muốn render lại props đó hay ko
  (Quyết định không render lại những component những props không cần thiết)
  Mỗi lần thằng cha được render thì thằng con lại được render lại
  Nếu props thay đổi thì render. Ngược lại thì không
*/
const Main = () => {
  const [count, setCount] = useState(0)
  const handleIncreate = () => {
    setCount(count + 1)
  }
  return (
    <View>
      <Text >{count}</Text>
      <Content />
      <Button onPress={handleIncreate} title="Click me" color="black" />
    </View>
  )
}
export default Main