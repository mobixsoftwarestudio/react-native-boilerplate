import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Auth: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Authentication</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { Auth };
