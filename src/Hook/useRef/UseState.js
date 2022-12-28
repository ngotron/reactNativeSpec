import { useState } from "react"
import { Button, Text, View } from "react-native"

const UeState = () => {
  const [count, setCount] = useState(0)
  const handleIncreate = () => {
    setCount(count + 1)
  }
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={handleIncreate} title="Increate" color="black" />
    </View>
  )
}
export default UeState