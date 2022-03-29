import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes as AppRoutes } from 'src/Routes/AppRoutes';

export const App = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
