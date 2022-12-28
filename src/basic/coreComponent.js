import { Image, ScrollView, Text, TextInput, View } from "react-native"

const CoreComponent = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text>
        Some text aaa
      </Text>
      <View >
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Image source={require('../image/Oranges.jpg')} style={{ width: 200, height: 200 }} />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
    </ScrollView>

  )
}
export default CoreComponent