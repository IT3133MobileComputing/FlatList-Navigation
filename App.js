import { StyleSheet, Text, View } from 'react-native';
import StudentList from './component/StudentList';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './component/Profile';
import AddStudent from './component/AddStudent';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StudentList" component={StudentList} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Add" component={AddStudent} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}