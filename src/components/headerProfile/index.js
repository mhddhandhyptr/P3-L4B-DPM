import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(async () => {
      const data = { name, email };
      await onSubmit(data);
      setSubmittedData(data); 
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubmittedData(null); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Profil</Text>
      <TextInput
        placeholder="Nama"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="NPM"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      
      {}
      <TouchableOpacity
        style={[styles.submitButton, loading && styles.submitButtonDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={styles.submitButtonText}>Submit</Text>
        )}
      </TouchableOpacity>

      {}
      <TouchableOpacity
        style={[styles.submitButton, styles.restartButton]}
        onPress={handleReset}
      >
        <Text style={styles.submitButtonText}>Restart</Text>
      </TouchableOpacity>

      

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  input: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 2,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    marginBottom: 10, 
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButtonDisabled: {
    backgroundColor: colors.lightGray,
    borderColor: colors.lightGray,
  },
  restartButton: {

    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    marginBottom: 10 
  },
 
});

export default ProfileForm;
