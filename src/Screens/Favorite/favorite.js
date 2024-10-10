import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import favoriteData from './favorite.json';
import JeansDestaque from "../../Assets/jeans_destaque.png";
import SueterDestaque2 from '../../Assets/sueter_destaque2.png';
import JaquetaDestaque from '../../Assets/jaqueta_destaque.png';
import Icon from 'react-native-vector-icons/AntDesign';


const imageMap = {
    "jeans_destaque.png": JeansDestaque,
    "sueter_destaque2.png": SueterDestaque2,
    "jaqueta_destaque.png": JaquetaDestaque,
};

const FavoriteScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <Image style={styles.productImage} source={imageMap[item.image]} />
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <View style={styles.sizesContainer}>
                        <Text style={styles.sizeLabel}>Tamanhos:</Text>
                        {item.sizes.map((size, index) => (
                            <Text key={index} style={styles.sizeText}>{size}</Text>
                        ))}
                    </View>
                    <View style={styles.colorsContainer}>
                        <Text style={styles.colorLabel}>Cores Disponíveis:</Text>
                        <View style={styles.colorCircles}>
                            {item.colors.map((color, index) => (
                                <View key={index} style={[styles.colorCircle, { backgroundColor: color }]} />
                            ))}
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.favoriteButton}>
                    <Icon name="heart" size={16} color="#628DB4" /> 
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={favoriteData.favorites}  // Usando os dados do JSON importado
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 15,
    },
    listContent: {
        paddingTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgb(235,235,235)',
    },
    productImage: {
        width: 75,
        height: '100%',
        borderRadius: 20,
    },
    productDetails: {
        flex: 1,
        marginLeft: 18,
    },
    productName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#444',
        paddingBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(150, 150, 150)',
        marginVertical: 5,
        paddingBottom: 5,
    },
    sizesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sizeLabel: {
        fontSize: 12,
        color: '#555',
        marginRight: 5,
    },
    sizeText: {
        textAlign: 'center',
        margin: 0,
        fontSize: 10,
        color: '#555',
        marginRight: 5,
        borderRadius: 50,
        paddingVertical: 3,
        paddingHorizontal: 6.5,
        borderColor: 'rgb(121, 179, 242)',
        borderWidth: 1,
    },
    colorsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    colorLabel: {
        fontSize: 12,
        color: '#555',
        marginRight: 5,
    },
    colorCircles: {
        flexDirection: 'row',
    },
    colorCircle: {
        width: 16,
        height: 16,
        borderRadius: 10,
        marginRight: 5,
        borderColor: '#CCC',
        borderWidth: 1,
    },
    favoriteButton: {
        alignSelf: 'flex-start',
        marginTop: 5,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgb(121, 179, 242)',
        borderRadius: 50,
    },
});

export default FavoriteScreen;
