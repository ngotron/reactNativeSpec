import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
const DetailScreen = ({ route, navigation }) => {
  const { id, otherParam } = route.params
  { console.log("Route: " + route.params) }
  return (
    <View style={styles.container}>
      <Text>Navigation DetailScreen</Text>
      <Text>{JSON.stringify(id)}</Text>
      <Text>{JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Detail', {
          id: Math.floor((Math.random() * 100))
        })}
      />
      <TouchableOpacity onPress={() => { navigation.goBack() }}><Text>Go Home</Text></TouchableOpacity>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },

})
export default DetailScreen