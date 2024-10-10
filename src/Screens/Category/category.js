import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import customData from "./category.json";

const screenWidth = Dimensions.get('window').width;

const CategoryScreen = ({ navigation }) => {
  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Produtos da Categoria', { itemId: item.products_category_id, itemName: item.category_name })}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: item.category_image }} />
          <Text style={styles.text}>{item.category_name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem no topo da tela */}
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/src/Assets/bfday_bgd.png' }} // URL da imagem
        style={styles.responsiveImage}
        resizeMode="contain" // Garantir que a imagem se ajuste corretamente
      />

      {/* FlatList que exibe os itens abaixo da imagem */}
      <FlatList
        data={customData.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Gerar chave única para cada item
        numColumns={2} // Número de colunas na grade
        columnWrapperStyle={styles.columnWrapper} // Estilo para o wrapper das colunas
        contentContainerStyle={styles.contentContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Cor de fundo da tela
  },
  columnWrapper: {
    justifyContent: 'space-between', // Espaçar os itens na linha
    paddingHorizontal: 10, // Espaçamento lateral
    paddingTop: 80
  },
  contentContainer: {
    paddingBottom: 80, // Espaço adicional no final da lista para evitar que o último item fique grudado no menu inferior
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 110,
    padding: 10, // Padding ao redor dos itens
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.00,
    elevation: 1,
    marginHorizontal: 5, // Espaço entre os itens na mesma linha
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    padding: 5, // Padding ao redor dos itens
  },
  responsiveImage: {
    marginTop: -40,
    width: screenWidth, // Largura da imagem igual à largura da tela
    height: 300, // Definindo altura fixa, ou pode ser ajustado proporcionalmente
    resizeMode: 'contain', // Para garantir que a imagem mantenha sua proporção
  },
  text: {
    fontSize: 18,
    marginTop: -50,
    fontWeight: 'bold',
    color: '#444'
  },
  image: {
    marginTop: -100,
    width: 150, // Ajuste conforme necessário
    height: 180, // Ajuste conforme necessário
    marginBottom: 40
  },
});

export default CategoryScreen;
