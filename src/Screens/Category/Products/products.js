import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import customData from "../../../../products.json";

const ProductsByCategory = ({ route, navigation }) => {
  const { itemId } = route.params; // Obtém o parâmetro enviado

  //console.log("meu custom tem", customData.data.filter(e => e.products_category === itemId ))


  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('Product', { itemId: item.products_id, categoryItemId: item.products_category })      
      } }
      >
        <View style={styles.containerImage}>
            <Image style={styles.image} source={{
          uri: item.products_image,
        }}  />
            <TouchableOpacity style={styles.containerImageFavoriteButton}>
            {/*
            <AntDesign name="heart" color={'#628DB4'} size={16} />
            
            */} 
            </TouchableOpacity>
        </View>

        <View style={styles.containerContent}>
            <Text style={styles.textHeader}>{item.products_name}</Text>
            <Text style={styles.textContent}>R$: {item.products_price}</Text>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={customData.data.filter(e => e.products_category === itemId )}
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
      height: "100%",
    },
    columnWrapper: {
      justifyContent: 'space-between', // Espaçar os itens na linha
      paddingHorizontal: 10, // Espaçamento lateral
      paddingBottom: 0,
      paddingTop: 20
    },
    contentContainer: {
      paddingBottom: 80, // Espaço adicional no final da lista para evitar que o último item fique grudado no menu inferior
    },
    itemContainer: {
      flex: 1,
      height: 270,
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 0, // Espaço entre as linhas
      marginHorizontal: 5, // Espaço entre os itens na mesma linha
    },
    containerImage: {
        width: "100%",
        borderRadius: 20,
        height: "85%",
        position: 'relative',
        backgroundColor: "#000000"
    },
    containerImageFavoriteButton: {
        position: 'absolute', // Posiciona o botão no topo da imagem
        top: 10, // Distância do topo
        right: 10, // Distância da borda direita
        width: 35, // Largura do botão
        height: 35, // Altura do botão
        backgroundColor: '#FFFFFF', // Cor de fundo do botão (exemplo)
        borderRadius: 30, // Bordas arredondadas (exemplo)
        justifyContent: 'center',
        alignItems: 'center',
      },
    image: {
        width: "100%", // Ajuste conforme necessário
        height: "100%", // Ajuste conforme necessário
        borderRadius: 15
      },
    containerContent: {
        width: "100%",
        height: "15%",
        flex: 1
    },

    textHeader:{
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
    color: '#444'
},

    textContent:{
    fontWeight: '400',
    marginTop: 2.5,
    fontSize: 12,
    color: '#9C9C9C'
    },

  });

export default ProductsByCategory;