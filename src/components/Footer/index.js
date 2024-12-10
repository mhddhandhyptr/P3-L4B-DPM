import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const FooterComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Praktikum P3 - 223510890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 14,
  },
});

export default FooterComponent;
