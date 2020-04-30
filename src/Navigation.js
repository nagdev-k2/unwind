import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Entry from './Components/Entry';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import OTP from './Components/OTP';
import UserDetails from './Components/SignUp/userDetails';
import UserHome from './Components/UserHome';
import UserProfile from './Components/UserProfile';
import Discover from './Components/Discover';

const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserHome" headerMode={null}>
        <Stack.Screen name="entry" component={Entry} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="UserHome" component={UserHome} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="OTP" component={OTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
