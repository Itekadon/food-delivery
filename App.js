import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menuscreen from './components/Menuscreen';
import Cartscreen from './components/Cartscreen';
import Profilescreen from './components/Profilescreen';

import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { FormProvider } from './contexts/FormContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <FormProvider>
          <NavigationContainer>
            <Tab.Navigator initialRouteName="Menu">
              <Tab.Screen name="Menu" component={Menuscreen} />
              <Tab.Screen name="Cart" component={Cartscreen} />
              <Tab.Screen name="Profile" component={Profilescreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </FormProvider>
      </ThemeProvider>
    </CartProvider>
  );
}
