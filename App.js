import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ex01 from './screens/week02/Ex01';
import Ex02 from './screens/week02/Ex02';
import Ex03 from './screens/week02/Ex03';
import Ex04 from './screens/week02/Ex04';
import Ex05 from './screens/week02/Ex05';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <Ex05/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
