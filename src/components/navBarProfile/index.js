// src/components/navBarProfile/index.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../styles/colors'; 

const NavBarProfile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.primary, 
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NavBarProfile;
