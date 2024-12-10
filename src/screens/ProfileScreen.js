import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import { colors } from '../styles/colors';

const ProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = () => {
      setTimeout(() => {
        setProfile(null); 
        setLoading(false); 
      }, 2000); 
    };
    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text>Loading Profile...</Text>
          </View>
        ) : !profile ? (
          <View style={styles.center}>
        
          </View>
        ) : (
          <ProfileCard
            name={profile.name}
            email={profile.email}
            profileImage={profile.profileImage}
          />
        )}
      </View>
      {}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    backgroundColor: colors.background,
  },
  content: {
    flex: 1, 
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
