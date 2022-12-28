import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"

const Content = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count > 3) {
      setCount(0)
      console.log("count" + count)
    }
  }, [count])
  const handleRun = () => {
    console.log(count)
    return setCount(count + 1)
  }
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 200, fontWeight: 1000 }}>{count}</Text>
      <Button onPress={handleRun} title="Run" color="black">{count}</Button>
    </View>
  )
}
export default Content