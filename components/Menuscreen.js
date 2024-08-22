import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../contexts/CartContext';

const menuItems = [
  { id: '1', name: 'Pizza', description: 'Cheesy Pizza', price: 50, image: require('../assets/Pizza.jpg') },
  { id: '2', name: 'Burger', description: 'Beef Burger', price: 38, image: require('../assets/burger and chips.png') },
  { id: '3', name: 'Sushi', description: 'Fresh Sushi', price: 15, image: require('../assets/fish.jpg') },
  { id: '4', name: 'Pasta', description: 'Italian Pasta', price: 55, image: require('../assets/pasta.jpg') },
  { id: '5', name: 'Salad', description: 'Healthy Salad', price: 30, image: require('../assets/salad.jpg') },
  { id: '6', name: 'Steak', description: 'Grilled Steak', price: 20, image: require('../assets/steak.jpg') },
];

const Menuscreen = ({ navigation }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <FlatList
      data={menuItems}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>R{item.price}</Text>
          <Button title="Add to Cart" onPress={() => addItemToCart(item)} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default Menuscreen;
