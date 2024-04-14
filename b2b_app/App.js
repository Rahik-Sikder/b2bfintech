import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Navigator from './src/Navigation';

/*

Check out and use:

https://react-native-vision-camera.com/docs/guides

https://react-native-vision-camera.com/docs/guides/code-scanning


*/


export default function App() {

  return (
    <Navigator />
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
