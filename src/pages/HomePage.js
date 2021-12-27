import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { SUCCESS_SET_CONFIRMATION, START_TIME } from "../redux/actions";

const HomePage = ({ navigation }) => {
  // const HomePage = (props) => {
  const { selectedProducts, selectedSets } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setsLength = selectedSets.length;
  const statusLength = selectedProducts.length;

  const handleOnPress = (pageName, navigation) => {
    if (selectedProducts.length === 0) {
      const startTimePoint = new Date().getTime() / 1000;
      dispatch({
        type: START_TIME,
        payload: { startTimePoint }
      });
    }
    navigation.navigate(pageName);
  };

  const handleSetConfirmation = (props) => {
    const endTimePoint = new Date().getTime() / 1000;
    dispatch({
      type: SUCCESS_SET_CONFIRMATION,
      payload: { selectedProducts, endTimePoint }
    });
    navigation.navigate("Success");
  };

  return (
    <View>
      <View>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Moonsite - Dress Me</Text>
        </View>
        <Text style={styles.subTitle}>Number of sets: {setsLength}</Text>
        <Text style={styles.subTitle}>
          Current set status: {statusLength}/3 items
        </Text>
      </View>
      <View>
        <View style={{ paddingTop: 20, paddingHorizontal: 40 }}>
          <Button
            title="Choosing a shoes"
            onPress={() => handleOnPress("Shoes", navigation, dispatch)}
          />
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 40 }}>
          <Button
            title="Choosing a pants"
            onPress={() => handleOnPress("Pants", navigation)}
          />
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 40 }}>
          <Button
            title="Choosing a shirt"
            onPress={() => handleOnPress("Shirt", navigation)}
          />
        </View>
      </View>
      {statusLength === 3 ? (
        <View style={{ paddingTop: 100, paddingHorizontal: 40 }}>
          <Button
            color="#49AF41"
            title="Confirm set"
            onPress={() => handleSetConfirmation(dispatch)}
          />
        </View>
      ) : null}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  titleWrap: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 30
  },
  subTitle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 40
  }
});
