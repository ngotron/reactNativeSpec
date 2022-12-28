import { useCallback, useState } from "react"
import { Text, View } from "react-native"
import Content from "./Content"

/*
UseCallbak được sinh ra để tránh tạo ra những hàm mới không cần thiết trong function component
UseCallback luôn đi đôi với memo. Bởi vì không có memo thì nó không như không
*/
const Main = () => {
  const [count, setCount] = useState(0)
  const handleIncreate = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  return (
    <View>
      <Text>{count}</Text>
      <Content onIncreate={handleIncreate} />
    </View>
  )
}
export default Main