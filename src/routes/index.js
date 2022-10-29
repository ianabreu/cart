import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animation:'slide_from_left', }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ 
            animation:'slide_from_right',
            title: 'Carrinho', 
            headerTintColor: '#FFF', 
            headerStyle: {
              backgroundColor: '#FE7122'} }}
      />
    </Stack.Navigator>
  );
};
