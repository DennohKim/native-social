import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.primary}}>Open up App.tsx to start working on your app!</Text>
	  <Text style={{fontSize: font.size.xlg}}>Chizaa</Text>
	  <AntDesign name="stepforward" size={24}/>
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
