import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen';
import LifeCycle from './src/components/lifecycle';
import ProfileForm from './src/components/headerProfile';
import NavBarProfile from './src/components/navBarProfile';
import ProfileCard from './src/components/ProfileCard.js';
import { colors } from './src/styles/colors';

const App = () => {
  const [showLifeCycle, setShowLifeCycle] = useState(true);
  const [profileData, setProfileData] = useState(null); 

  
  const handleSubmit = (data) => {
    setProfileData(data); 
  };

  return (
    <SafeAreaView style={styles.container}>
      {}
      <NavBarProfile />

      {}
      {profileData && (
        <ProfileCard
          name={profileData.name}
          email={profileData.email}
          profileImage="https://i.pinimg.com/736x/68/90/74/6890749e0eb03b75d79e63508db37b79.jpg" 
        />
      )}

      {}
      <ScrollView>
        <ProfileForm onSubmit={handleSubmit} />
        {showLifeCycle && <LifeCycle />}
        <ProfileScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
