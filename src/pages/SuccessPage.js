import React from "react";
import { StyleSheet, Text, Button, View, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import images from "../images/images";
import { RESET_SELECTED_PRODUCTS } from "../redux/actions";

const SuccessPage = ({ navigation, route }) => {
  const { selectedProducts, startTime, endTime } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  // rendom images
  const imgArr = Object.keys(images);
  const randomNumber = Math.random();
  const imgIndex = Math.floor(randomNumber * imgArr.length);
  const randomKey = imgArr[imgIndex];
  const randomImage = images[randomKey];
  const image = { uri: randomImage };

  const handleSubmit = () => {
    dispatch({
      type: RESET_SELECTED_PRODUCTS
    });
    navigation.navigate("Home");
  };

  // time to complete current set
  const timeDelta = Math.round(endTime - startTime);

  return (
    <View style={styles.box}>
      <Image style={styles.image} source={image} />
      <Text style={styles.subTitle}>Successfully added to the list</Text>
      <Text>Time to complite current set: {timeDelta} in seconds</Text>
      <View style={styles.tableContainer}>
        <FlatList
          style={{ marginLeft: 20, flexGrow: 0 }}
          data={selectedProducts}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  margin: 1
                }}
              >
                <Text style={styles.tableTitle}>{item.type}</Text>
                <Text>{item.name}</Text>
                <Text>{item.brand}</Text>
                <Text>{item.color}</Text>
                <Text>{item.size}</Text>
              </View>
            );
          }}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Button title="Pick a new set" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    justifyContent: "center",
    width: 300,
    margin: 20,
    maxHeight: 150
  },
  box: {
    flex: 1,
    alignItems: "center"
  },
  subTitle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
    marginTop: 10
  },
  image: {
    marginTop: 30,
    width: 300,
    height: 300
  },
  tableTitle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20
  },
  button: {
    backgroundColor: "#49AF41"
  }
});
