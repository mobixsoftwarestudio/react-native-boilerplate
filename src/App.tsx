import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './modules/routes';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
