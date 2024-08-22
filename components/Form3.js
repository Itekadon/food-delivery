import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { FormContext } from '../contexts/FormContext';

const Form3 = ({ navigation }) => {
  const { user, updateUser } = useContext(FormContext);
  const [cardNumber, setCardNumber] = useState(user.cardNumber);
  const [expiryDate, setExpiryDate] = useState(user.expiryDate);
  const [cvv, setCvv] = useState(user.cvv);

  const handleSubmit = () => {
    updateUser('cardNumber', cardNumber);
    updateUser('expiryDate', expiryDate);
    updateUser('cvv', cvv);
    navigation.navigate('Profile');
  };

  return (
    <View>
      <Text>Card Number:</Text>
      <TextInput value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" />
      <Text>Expiry Date:</Text>
      <TextInput value={expiryDate} onChangeText={setExpiryDate} placeholder="MM/YY" />
      <Text>CVV:</Text>
      <TextInput value={cvv} onChangeText={setCvv} keyboardType="numeric" />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Form3;
