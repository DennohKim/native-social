import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.primary}}>Open up App.tsx to start working on your app!</Text>
	  <Text style={{fontSize: font.size.xlg}}>Chizaa</Text>
      <StatusBar style="auto" />
    </View>
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
