import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Entry from './Entry';

const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="entry" headerMode={null}>
        <Stack.Screen name="entry" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
