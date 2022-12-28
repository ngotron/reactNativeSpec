import { memo } from "react"
import { Text, View } from "react-native"

const Content = () => {
  console.log("render")
  return (
    <View>
      <Text>Render lại memo: </Text>
    </View>
  )
}
export default memo(Content)