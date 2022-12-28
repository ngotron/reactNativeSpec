import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";
const Activi = () => {
  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }
  return (
    <View style={styles.container} >
      {loading
        ? <ActivityIndicator size="small" animating={true} color={"black"} hidesWhenStopped={true} />
        : <Button title="Friend" onPress={startLoading} />}
    </View>
  )
}
export default Activi
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})