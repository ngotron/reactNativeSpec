
/*
1. usestate => Là chuyển đổi từ trạng thái này sang trạng thái khác
- Cách thức hoạt động
  + Khai báo: usestate là một mảng 
    * 1 giá trị mặc định là count. Giá trị này chỉ gọi duy nhất lần đầu tiên => initial
    * setState => là một function để chuyển đổi từ trạng thái này sang trạng thái khác 
*/
import { useState } from "react";
import { Button, Text, View } from "react-native";
const Main = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Tính" color="black" onPress={handleCount} />
    </View>
  )
}
export default Main