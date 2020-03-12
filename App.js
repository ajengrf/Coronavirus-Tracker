import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import HomeScreen from './screens/Home'
import DeathScreen from './screens/Deaths'
import RecoveredScreen from './screens/Recovered'

const Stack = createStackNavigator()

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
          <Stack.Screen name="Death" component={DeathScreen}/>
          <Stack.Screen name="Recovered" component={RecoveredScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

