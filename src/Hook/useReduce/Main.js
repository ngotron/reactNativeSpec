import { useReducer } from "react";
import { Button, Text, View } from "react-native";
/*
  1. useReduce giong useState 
  Khác: 
  useState: Chỉ thích hợp truyền những ini kiểu dữ liệu đơn giản như: Nguyên thủy, object cấp 2
  useReduce: Phức tạp hơn như array, object từ hai cấp trở lên
  1. init
  2. Actions 
  3. Tạo ra reducer
  4. dispatch
*/
// init => init giá trị loại nào thì return ra loại đấy
const initState = 0;
// Actions 
const DOWN_ACTION = "down";
const UP_ACTION = "up";
// Reducer
const reducer = (state, actions) => {
  switch (actions) {
    case DOWN_ACTION:
      return state - 1;
    case UP_ACTION:
      return state + 1;
    default:
      throw new Error("Invalid Actions")
  }
}
const Main = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  const handleDown = () => {
    dispatch(DOWN_ACTION)
  }
  const handleUp = () => {
    dispatch(UP_ACTION)
  }
  return (
    <View>
      <Text style={{ fontSize: 100 }}>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="Down" color="red" onPress={handleDown} />
        <Button title="Up" color="black" onPress={handleUp} />
      </View>
    </View>
  )
}
export default Main