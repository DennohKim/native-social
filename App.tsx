import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/home/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
        <View style={styles.app}>
         <HomeScreen/>
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  app: {
	flex: 1,
  },
});
