import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { FormContext } from '../contexts/FormContext';

const Profilescreen = () => {
  const { user } = useContext(FormContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>Name: {user.name}</Text>
      <Text style={{ color: theme.textColor }}>Email: {user.email}</Text>
      <Text style={{ color: theme.textColor }}>Address: {user.address}</Text>

      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profilescreen;
