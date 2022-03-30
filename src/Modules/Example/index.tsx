import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// import { Container } from './styles';

const Example: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Example</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Example };
