import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import ListEmpty from "./Components/ListEmpty";
import ListHeader from "./Components/ListHeader";
import RenderItem from "./Components/RenderItem";
// import { StyleSheet, View } from "react-native";

const mockApi = `https://62904135665ea71fe12f6eef.mockapi.io/flatList`;
const AddFriend = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)
  const handlecouter = () => {
    setCount(count + 1)
  }
  const handleDelete = (id) => {
    axios.delete(`${mockApi}/${id}`)
      .then(setData((res) => { return res.filter(data => data.id !== id) }))

  }
  //Ko des => Tự động reder liên tục khi tắt máy thì hết render 
  /*useEffect(() => {
    axios.get(mockApi)
      .then((reponsive) => (setData(reponsive.data)))
      .catch((error) => (error))
  })*/
  // 1 mảng rỗng => Tự động reder 1 lần
  /* useEffect(() => {
    axios.get(mockApi)
      .then((reponsive) => (setData(reponsive.data)))
      .catch((error) => (error))
  }, [])*/
  // 1 mảng chứ 1 des => Tự động reder khi des thay đổi 
  useEffect(() => {
    axios.get(mockApi)
      .then((reponsive) => (setData(reponsive.data)))
      .catch((error) => (error))
  }, [count])
  return (
    <View>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={(dada) => {
          return (
            <RenderItem id={dada.item.id} img={dada.item.img} desc={dada.item.desc} time={dada.item.time} title={dada.item.title} onDelete={handleDelete} />
          )
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={{
          flexGrow: 1, justifyContent: "center",
        }}

      />
      <Text style={{ fontSize: 30, textAlign: "center" }}>{count}</Text>
      <Button title="count" onPress={handlecouter} color="black" />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10
  }
})


export default AddFriend