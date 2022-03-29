import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// NOTE here you will import the screens from that module
import { Auth } from 'src/Modules/Auth/index';

const Stack = createNativeStackNavigator();

// NOTE Here you will put the screen options
const screenOptions = {};

// NOTE Here you will put the informations about your screen

const authScreens = [
  {
    name: 'Auth',
    component: Auth,
    options: screenOptions,
  },
];

const Routes = () => {
  return (
    <Stack.Navigator>
      {authScreens.map((screen, index) => (
        <Stack.Screen
          key={`${screen.name+index}`}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export { Routes };
