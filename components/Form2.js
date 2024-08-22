import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { FormContext } from '../contexts/FormContext';

const Form2 = ({ navigation }) => {
  const { user, updateUser } = useContext(FormContext);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zipCode, setZipCode] = useState(user.zipCode);

  const handleNext = () => {
    updateUser('address', address);
    updateUser('city', city);
    updateUser('state', state);
    updateUser('zipCode', zipCode);
    navigation.navigate('Form3');
  };

  return (
    <View>
      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} />
      <Text>City:</Text>
      <TextInput value={city} onChangeText={setCity} />
      <Text>State:</Text>
      <TextInput value={state} onChangeText={setState} />
      <Text>Zip Code:</Text>
      <TextInput value={zipCode} onChangeText={setZipCode} keyboardType="numeric" />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default Form2;
