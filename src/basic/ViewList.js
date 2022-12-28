import { FlatList, Text, View } from "react-native";

// FlatList
const FlatLists = () => {
  return (
    <View >
      <FlatList
        data={[
          { key: "1" },
          { key: "2" },
          { key: "3" },
          { key: "4" },
          { key: "5" },
          { key: "6" },
          { key: "7" },
          { key: "8" },
          { key: "9" },
          { key: "10" },
        ]}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (<View key={item.key}>
          <Text >{item.key} </Text>
        </View>)}


      />
    </View>
  )
}

export default FlatLists
