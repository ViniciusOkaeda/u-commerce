import React, { useState } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const InfoScreen = () => {
  const items = [
    { id: 1, text: 'Para provar os produtos, siga as orientações à seguir: ', imageUrl: 'https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/src/Assets/161.jpg' },
    { id: 2, text: 'A parte do seu corpo que irá "provar" o produto deve estar totalmente dentro da imagem da câmera.', imageUrl: 'https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/src/Assets/62333.jpg' },
    { id: 3, text: 'O usuário deve estar com roupas leves e finas, ex: camisa básica.', imageUrl: 'https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/src/Assets/11414.jpg' },
    { id: 4, text: 'Não deve ter mais de uma pessoa dentro da imagem da câmera.', imageUrl: 'https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/src/Assets/11167.jpg' },
    { id: 5, text: 'Desfrute de uma excelente experiência!', imageUrl: 'https://raw.githubusercontent.com/ViniciusOkaeda/u-commerce/refs/heads/main/src/Assets/545.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  // Função para ir para o próximo item
  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Redireciona para a tela de "Provar Produto"
      navigation.navigate('ProvarProduto');
    }
  };

  // Função para voltar ao item anterior
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Customização dos botões (cores e tamanhos)
  const buttonStyles = {
    height: 50,                  // Tamanho do botão
    borderRadius: 5,             // Bordas arredondadas
  };

  const textButtonStyles = {
    fontSize: 18,               // Tamanho do texto
    color: 'white',             // Cor do texto
  };

  // Função para determinar a cor do botão
  const getButtonColor = (isDisabled) => {
    return isDisabled ? '#A0A0A0' : '#628db5'; // Cor desativada e ativa
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.itemContainer}>
          {/* Imagem */}
          <Image source={{ uri: items[currentIndex].imageUrl }} style={styles.image} />
          
          {/* Texto e Botões */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{items[currentIndex].text}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, buttonStyles, { backgroundColor: getButtonColor(currentIndex === 0) }]} // Personalizando cor
                onPress={goToPrevious}
                disabled={currentIndex === 0}
              >
                <Text style={textButtonStyles}>Anterior</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, buttonStyles, { backgroundColor: getButtonColor(currentIndex === items.length - 1) }]} // Personalizando cor
                onPress={goToNext}
                disabled={currentIndex === items.length - 1}
              >
                <Text style={textButtonStyles}>Próximo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Se for o último item, mostra o botão "Provar Produto" */}
        {currentIndex === items.length - 1 && (
          <View style={styles.fixedButtonContainer}>
            <TouchableOpacity
              style={[styles.button2, buttonStyles]}
              onPress={() => navigation.navigate('Experimente seu Produto')}
            >
              <Text style={textButtonStyles}>Provar Produto</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',  // Altura total do item
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,  // Dá espaço para o botão fixo no rodapé
  },
  itemContainer: {
    width: '100%',
    height: '100%',  // Altura total do item
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '80%', // A imagem ocupa 60% da altura total
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%', // Texto ocupa 90% da largura
    height: '20%', // O restante da altura para o texto e botões
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 10, // Espaço entre a imagem e o texto
  },
  text: {
    fontSize: 24,
    textAlign: 'justify',
    marginBottom: 20,
    height: '70%'
  },
  buttonContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'space-between', // Coloca espaço entre os botões
  },
  button: {
    width: '49%', // Cada botão ocupa 48% da largura disponível
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#628db5',  // Cor do botão padrão
  },
  button2: {
    width: '98%', // Cada botão ocupa 48% da largura disponível
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#144877',  // Cor do botão
  },
  fixedButtonContainer: {
    width: '100%',
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default InfoScreen;
