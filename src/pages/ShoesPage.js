import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions";

import ProductCard from "../components/ProductCard";
import SearchProducts from "../components/SearchProducts";

import productImages from "../images/productImages";

const ShoesPage = ({ navigation, route }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const { products, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  let shoeFilteredHtml;
  let count;
  let shoeData;
  let productType;

  const shoesImg = productImages.shoes;
  console.log();
  if (products) {
    shoeData = products.filter((item) => item.type === "shoes");
    productType = shoeData[0]?.type;
    shoeData.sort(function (x, y) {
      let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });

    let dataToFilterBy;
    if (inputValue.length === 0) {
      dataToFilterBy = shoeData;
    } else {
      if (inputValue.length === 1) {
        dataToFilterBy = filteredData.slice(0, 5);
      } else {
        dataToFilterBy = filteredData;
      }
    }
    count = dataToFilterBy.length;
    shoeFilteredHtml = dataToFilterBy.map((item) => (
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
              <Image style={styles.pantsImg} source={shoesImg} />
            </View>
            <View style={styles.search}>
              <SearchProducts
                data={shoeData}
                setFilteredData={setFilteredData}
                setInputValue={setInputValue}
              />
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.count}>
                {count} {productType} were found
              </Text>
            </View>
            {shoeFilteredHtml}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ShoesPage;

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
    height: 40
  }
});
