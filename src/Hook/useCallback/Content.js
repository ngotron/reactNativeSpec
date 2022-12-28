import { memo } from "react"
import { Button, Text, View } from "react-native"

//Memo function == PureComponent
const Content = ({ onIncreate }) => {
  console.log("memo")
  return (
    <View>
      <Text>Callback</Text>
      <Button onPress={onIncreate} title="Click me" color="black" />
    </View>
  )
}
export default memo(Content)