import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePag from './src/features/homePag/view/HomePag.js';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePag></HomePag>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4768d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
