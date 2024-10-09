import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import customData from "../../../products.json";

const { width, height } = Dimensions.get('window');

const ProductScreen = ({ route, navigation }) => {
  const itemId = route.params.itemId; // Obtém o parâmetro enviado
  const itemCategoryId = route.params.categoryItemId; // Obtém o parâmetro enviado
  const productData = customData.data.filter(e => e.products_category === itemCategoryId && e.products_id === itemId)


  //console.log("o productData", productData)


  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    { id: 1, uri: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1' },
    { id: 2, uri: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2' },
    { id: 3, uri: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3' },
  ];

  const scrollToIndex = (index) => {
    scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    setCurrentIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const index = Math.floor(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          scrollEventThrottle={16} // Para melhorar a performance
        >
          {productData.map(e => e.images.map((image) => (
            <Image key={image.id} source={{ uri: image.images_url }} style={styles.image} />
          )))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {productData.map(e => e.images.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.indicator, currentIndex === index && styles.activeIndicator]}
              onPress={() => scrollToIndex(index)}
            />
          )))}
        </View>
      </View>

      {productData.map((item, idx) => {


        return (

          <View style={styles.infoContainer} key={idx}>
            <Text style={styles.title}>{item.products_name}</Text>
            <Text style={styles.description}>
              {item.products_description}
            </Text>
            <Text style={styles.price}>R$ {item.products_price}</Text>
            <Text style={styles.additionalInfoTitle}>Tamanhos:</Text>
            <View style={styles.optionsContainer}>
              {item.sizes.map((size, index) => (
                <View key={index} style={styles.circle}>
                  <Text style={styles.optionText}>{size.sizes_name}</Text>
                </View>
              ))}
            </View>


            <Text style={styles.additionalInfoTitle}>Cores disponíveis:</Text>
            <View style={styles.optionsContainer}>
              {item.colors.map((color, index) => (
                <View key={index} style={[styles.circle, { backgroundColor: color.colors_name }]}>
                  <Text style={styles.optionText} />
                </View>
              ))}
            </View>

            <View style={styles.tryProductContainer}>
              <TouchableOpacity style={styles.tryProductButton}>
                <Text style={styles.tryProductText}>Provar Produto</Text>
              </TouchableOpacity>


            </View>




          </View>

        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: height * 0.6, // Ocupa 60% da altura da tela
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: height * 0.2 * 0.1, // Posição das bolinhas (10% da altura da imagem)
    alignSelf: 'center',
    flexDirection: 'row',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: '#666',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 15,
  },
  additionalInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  }, optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os itens que não cabem na linha atual vão para a próxima
    marginBottom: 15,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  optionText: {
    color: '#333',
    fontWeight: 'bold',
  },
  tryProductContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tryProductButton: {
    width: "90%",
    margin: "0 auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#144877"
  },
  tryProductText: {
    color: "#fff",
    fontWeight: "bold"
  },
});

export default ProductScreen;
