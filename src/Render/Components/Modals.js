import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Modals = () => {
  const [showModal, setShowModal] = useState(false);
  return (
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
                    setShowModal(!showModal);
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
        <View style={{ backgroundColor: "white", height: "40%", width: "80%", alignItems: "center", justifyContent: "center" }}>
          <View style={{ flexDirection: "row" }} >
            <TouchableOpacity
              style={{ backgroundColor: "black", borderRadius: 10, padding: 10, paddingLeft: 20, paddingRight: 20 }}
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <Text style={{ textAlign: "center", color: "white" }}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}
export default Modals
const styles = StyleSheet.create({
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