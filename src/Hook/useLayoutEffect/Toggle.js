import { useState } from "react";
import { Button, View } from "react-native";
import Content from "./Content";
const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
    console.log("tong")
  }
  return (
    <View>
      <Button onPress={handleToggle} color="black" title="Toggle">{toggle} </Button>
      {toggle && <Content />}
    </View>
  )
}
export default Toggle