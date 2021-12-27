import React from "react";
import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";

const PopUp = ({ showPopUp, setShowPopUp, handleClosePopUp }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showPopUp}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setShowPopUp(!showPopUp);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add the product to the list?</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handleClosePopUp}
          >
            <Text style={styles.textStyle}>Yes</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 3,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 60
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18
  },
  button: {
    flax: 1,
    borderRadius: 3,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  }
});
