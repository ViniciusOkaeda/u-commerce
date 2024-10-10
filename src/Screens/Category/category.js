import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import customData from "./category.json";

const CategoryScreen = ({ navigation }) => {
  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Produtos da Categoria', { itemId: item.products_category_id, itemName: item.category_name })}
      >

        <View style={styles.innerContainer}>
          <Image style={styles.image}         source={{
          uri: item.category_image,
        }} />
          <Text style={styles.text}>{item.category_name}</Text>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={customData.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Gerar chave única para cada item
        numColumns={2} // Número de colunas na grade
        columnWrapperStyle={styles.columnWrapper} // Estilo para o wrapper das colunas
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Cor de fundo da tela
    height: 400,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Espaçar os itens na linha
    paddingHorizontal: 10, // Espaçamento lateral
    paddingBottom: 0,
    paddingTop: 90
  },
  contentContainer: {
    paddingBottom: 80, // Espaço adicional no final da lista para evitar que o último item fique grudado no menu inferior
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 0, // Espaço entre as linhas
    padding: 10, // Padding ao redor dos itens
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.15,
    shadowRadius: 1.00,
    elevation: 1,
    marginHorizontal: 5, // Espaço entre os itens na mesma linha
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    padding: 10, // Padding ao redor dos itens
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#444'
  },
  image: {
    marginTop: -100,
    width: 150, // Ajuste conforme necessário
    height: 150, // Ajuste conforme necessário
  },
});

export default CategoryScreen;