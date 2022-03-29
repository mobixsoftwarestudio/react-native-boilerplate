import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes as AppRoutes } from 'src/Routes/AppRoutes';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
