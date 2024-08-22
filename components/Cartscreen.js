import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item, removeItem }) => (
  <View style={styles.item}>
    <Text>{item.name}</Text>
    <Text>{item.quantity} x R{item.price}</Text>
    <Button title="Remove" onPress={() => removeItem(item.id)} />
  </View>
);

const Cartscreen = ({ navigation }) => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);


  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} removeItem={removeItemFromCart} />
        )}
      />
      <Button title="Proceed to Checkout" onPress={() => { clearCart(); navigation.navigate('Menu'); }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  total: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Cartscreen;
