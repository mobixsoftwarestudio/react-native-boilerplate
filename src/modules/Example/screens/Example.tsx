import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Example = () => {
  return (
    <View style={styles.container}>
      <Text>Example</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
