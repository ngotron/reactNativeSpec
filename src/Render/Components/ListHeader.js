import { Text, View } from "react-native";

const ListHeader = () => {
  return (
    <View >
      <View style={{
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: "space-between",
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          marginBottom: 10
        }}>
          <Text>Friends</Text>
          <Text>Tìm kiếm </Text>
        </View>
        <View style={{
          flexDirection: 'row',
        }}>
          <Text style={{
            padding: 8,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 15,
            backgroundColor: "gray",
            borderRadius: 20,
            marginRight: 10
          }} >Suggestions</Text>
          <Text style={{
            padding: 10,
            fontSize: 15,
            backgroundColor: "gray",
            borderRadius: 20
          }} >Yours friend </Text>
        </View>
      </View>
      <View style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
        marginBottom: 10
      }}></View>
    </View>
  )
}
export default ListHeader