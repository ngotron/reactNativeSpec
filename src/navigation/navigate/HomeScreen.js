import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Navigation home</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Detail", {
        id: 6,
        otherParam: "Anything you want here!"
      })}><Text style={{ color: "white" }}>Detail</Text></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  btn: {
    padding: 8,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "black",
    borderRadius: 10
  }
})
export default HomeScreen