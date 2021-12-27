import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions";

import ProductCard from "../components/ProductCard";
import SearchProducts from "../components/SearchProducts";

import productImages from "../images/productImages";

const ShirtPage = ({ navigation, route }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const { products, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  let shirtFilteredHtml;
  let count;
  let shirtData;
  let productType;

  const shirtImg = productImages.shirt;
  console.log();
  if (products) {
    shirtData = products.filter((item) => item.type === "shirt");
    productType = shirtData[0]?.type;
    shirtData.sort(function (x, y) {
      let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });

    let dataToFilterBy;
    if (inputValue.length === 0) {
      dataToFilterBy = shirtData;
    } else {
      if (inputValue.length === 1) {
        dataToFilterBy = filteredData.slice(0, 5);
      } else {
        dataToFilterBy = filteredData;
      }
    }
    count = dataToFilterBy.length;
    shirtFilteredHtml = dataToFilterBy.map((item) => (
      <View>
        <ProductCard
          id={item.id}
          name={item.name}
          brand={item.brand}
          colors={item.colors}
          sizes={item.sizes}
          type={item.type}
          navigation={navigation}
        />
      </View>
    ));
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <View>
            <View style={styles.titleContainer}>
              <Image style={styles.pantsImg} source={shirtImg} />
            </View>
            <View style={styles.search}>
              <SearchProducts
                data={shirtData}
                setFilteredData={setFilteredData}
                setInputValue={setInputValue}
              />
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.count}>
                {count} {productType} were found
              </Text>
            </View>
            {shirtFilteredHtml}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ShirtPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    fontSize: 20
  },
  loading: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 30
  },
  count: {
    fontSize: 15
  },
  search: {
    alignItems: "center",
    marginTop: 5
  },
  titleContainer: {
    alignItems: "center"
  },
  countContainer: {
    marginLeft: 20
  },
  pantsImg: {
    width: 70,
    height: 60
  }
});
