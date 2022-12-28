import { useState } from "react"
import { Button, ScrollView, Text, View } from "react-native"

const Fundamentals = () => {

  // jsx
  const fullName = (firstName, lastName) => {
    return firstName + lastName
  }
  return (
    <ScrollView>
      <Text>My name is {fullName("Ngo", "Tron")}</Text>
      <View>

        {/* <Interest category="POP" image="https://img.freepik.com/premium-vector/smile-icon-smile-logo-vector-design-happy-emoticon-business-funny-design-vector-emoji-happiness_6415-3544.jpg?w=2000" /> */}
        <Interest name="Tron" />
      </View>
    </ScrollView>

  )
}

// prop
const Interest = (prop) => {
  const [ishungry, setHungry] = useState(true)
  return (
    <View>
      <Text>my name is {prop.name} , {ishungry ? "hungry " : "full"}</Text>
      <Button onPress={() => { setHungry(false) }} title={ishungry ? "Pour me saome milk" : "Thank you"} disabled={!ishungry} />
      {/* <Text >Music {prop.category}</Text>
      <Image source={{ uri: prop.image }} style={{ width: 200, height: 200 }} /> */}
    </View>
  )
}
export default Fundamentals