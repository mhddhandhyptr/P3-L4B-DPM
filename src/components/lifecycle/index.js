import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component Did Mount');
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component Did Update: Count berubah menjadi', count);
  }, [count]);

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.lifeCycleContainer}>
        <Text style={styles.title}>Component Life Cycle</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={changeCount}
        >
          <Text style={styles.buttonText}>Increment Count</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  lifeCycleContainer: {
    backgroundColor: colors.backgroundLight,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  countText: {
    fontSize: 16,
    marginTop: 10,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: colors.white, 
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white', 
    fontWeight: 'bold',
  },
});

export default LifeCycle;
