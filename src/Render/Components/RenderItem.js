import { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import handleAdd from "../HandleOpress/Add";
const RenderItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.render} >
      <View style={{ width: "30%" }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 100 }}
          source={{ uri: props.img }} alt="error" />
      </View>
      <View style={styles.renderC}>
        <View style={styles.renderChil} >
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.desc}>{props.desc}</Text>
          </View>
          <View >
            <Text style={styles.time}>{props.time}</Text>
          </View>
        </View >
        <View style={styles.renderChilren} >
          <TouchableOpacity
            style={styles.add}
            onPress={handleAdd}
          >
            <Text style={{ color: "white" }}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.delete, styles.button, styles.buttonOpen]}
            onPress={() => {
              setShowModal(true)
            }}
          >
            <Text style={{ color: "black" }}>Delete</Text>
          </TouchableOpacity>

        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.containerModal}>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={showModal}
              onRequestClose={() => {
                console.log('Modal has been closed.');
              }}>
              <View style={styles.modal}>
                <View
                  style={{ backgroundColor: "white", height: "40%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 10 }}>
                  <View style={{ flexDirection: "row" }} >
                    <TouchableOpacity
                      style={{ backgroundColor: "black", borderRadius: 10, padding: 10, paddingLeft: 20, paddingRight: 20 }}
                      onPress={() => {
                        setShowModal(!showModal) & props.onDelete(props.id);
                      }}>
                      <Text style={{ textAlign: "center", color: "white" }}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ backgroundColor: "blue", borderRadius: 10, padding: 10, paddingLeft: 20, paddingRight: 20 }}
                      onPress={() => {
                        setShowModal(!showModal);
                      }}>
                      <Text style={{ textAlign: "center", color: "white" }}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </SafeAreaView>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10
  },
  render: {

    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom: 10
  },
  renderChil: {
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  renderChilren: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  renderC: {
    width: "70%",
    flexDirection: 'column',
    justifyContent: "space-around",
    alignContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 15,
    color: "black"
  },
  time: {
    fontSize: 12,
    color: "gray",
    paddingTop: 5
  },
  add: {
    backgroundColor: "blue",
    padding: 8,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
  delete: {
    backgroundColor: "grey",
    color: "white",
    padding: 8,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
})
export default RenderItem