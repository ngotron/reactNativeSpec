import { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

// Cách hoạt động của useRef
// Trong useRef là giá trị khởi tạo nó chỉ nhận giá trị này một lần đầu tiên
// Khi component được mount còn khi reder thì ko gọi được nữa
// Return về một object
const UseRef = () => {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const preCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    preCount.current = count
    console.log("giá trị đầu tiền: " + preCount.current)
  }, [count])
  useEffect(() => {
    // console.log(h1Ref.current)
    const ref = h1Ref.current.getBoundingClientRect();
    console.log(ref)
  })
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
    console.log("Start: " + timerId.current)
  }
  const hanldeStop = () => {
    clearInterval(timerId.current)
    console.log("Stop: " + timerId.current)
  }
  // In ra giá trị hiện tại và giá trị trước đó của count
  console.log(count, preCount.current)

  return (
    <View>
      <Text ref={h1Ref} style={{ textAlign: "center", fontSize: 40 }}>{count}</Text>
      <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
        <Button title="Stop" color="red" onPress={hanldeStop} />
        <Button title="Start" color="black" onPress={handleStart} />
      </View>
    </View>
  )
}
export default UseRef