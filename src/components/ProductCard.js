import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import PopUp from "./PopUp";

import { ADD_COLOR_AND_ID, ADD_SIZE } from "../redux/actions";

const ProductCard = (props) => {
  const [showSize, setShowSize] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch();

  // color btn press heandler
  const handlePressColor = (id, name, brand, color, type, dispatch) => {
    dispatch({
      type: ADD_COLOR_AND_ID,
      payload: { id: id, name: name, brand: brand, color: color, type: type }
    });
    setShowSize(true);
  };

  // size btn press heandler
  const handlePressSize = (size, id, type, dispatch) => {
    dispatch({
      type: ADD_SIZE,
      payload: { size: size, id: id, type: type }
    });
    setShowPopUp(!showPopUp);
  };

  // pop-up close
  const handleClosePopUp = () => {
    setShowPopUp(!showPopUp);
    setShowSize(!showSize);
    props.navigation.navigate("Home");
  };

  const buttonStyle = (color) => {
    const selectedStyle = { marginRight: 3, marginBottom: 1 };
    if (color === "white" || color === "#fff") {
      selectedStyle.backgroundColor = "#ccc";
    }
    return selectedStyle;
  };

  return (
    <Card key={props.id}>
      <Text style={styles.item}>Name: {props.name}</Text>
      <Text style={styles.item}>Brand: {props.brand}</Text>
      <View style={styles.colors}>
        {props.colors.map((color) => (
          <Button
            buttonStyle={buttonStyle(color)}
            type="outline"
            title={color}
            titleStyle={{ color: color }}
            onPress={() =>
              handlePressColor(
                props.id,
                props.name,
                props.brand,
                color,
                props.type,
                dispatch
              )
            }
          />
        ))}
      </View>
      {showSize ? (
        <View style={styles.sizes}>
          {props.sizes.map((size) => (
            <Button
              containerStyle={{ marginRight: 3 }}
              type="outline"
              title={size}
              titleStyle={{ color: "#333" }}
              onPress={() =>
                handlePressSize(size, props.id, props.type, dispatch)
              }
            />
          ))}
        </View>
      ) : null}
      {showPopUp ? (
        <PopUp
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          handleClosePopUp={handleClosePopUp}
        />
      ) : null}
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  item: {
    fontSize: 18
  },
  colors: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5
  },
  sizes: {
    flex: 1,
    flexDirection: "row"
  }
});
