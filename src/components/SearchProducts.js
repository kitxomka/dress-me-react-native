import React from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchProducts = ({ data, setFilteredData, setInputValue }) => {
  const searchItems = (inputValue) => {
    setInputValue(inputValue);
    let filteredData = [];
    if (!inputValue) {
      filteredData = data;
    } else {
      filteredData = data.filter((item) => {
        if (item.name.toLowerCase().indexOf(inputValue) > -1) {
          return true;
        }
        if (item.brand.toLowerCase().indexOf(inputValue) > -1) {
          return true;
        }
        let filterdColorArr = item.colors.filter(
          (item) => item.toLowerCase().indexOf(inputValue) > -1
        );
        if (filterdColorArr.length > 0) {
          return true;
        }
        let filterdSizeArr = item.sizes.filter(
          (item) => item.toString().indexOf(inputValue) > -1
        );
        if (filterdSizeArr.length > 0) {
          return true;
        }
        return false;
      });
    }
    setFilteredData(filteredData);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={searchItems}
    />
  );
};

export default SearchProducts;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 250,
    backgroundColor: "#fff"
  }
});
