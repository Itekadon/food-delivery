import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { FormContext } from '../contexts/FormContext';

const Form1 = ({ navigation }) => {
  const { user, updateUser } = useContext(FormContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleNext = () => {
    updateUser('name', name);
    updateUser('email', email);
    updateUser('phone', phone);
    navigation.navigate('Form2');
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Text>Phone:</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default Form1;
