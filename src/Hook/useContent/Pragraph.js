import { useContext } from 'react';
import { Text, View } from "react-native";
import { ThemeContext } from "./Main";
const Pragraph = () => {
  // const style = { backgroundColor: theme }
  // console.log(console.log(theme))
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <View style={{ backgroundColor: theme }}>
      <Text style={{ color: theme }}>This hook helps to build a context API,
        which itself is a mechanism used to share data without passing props.
      </Text>
    </View>
  )
}
export default Pragraph
