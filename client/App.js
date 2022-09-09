import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <image
        source ={{uri: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Donkey_%28Shrek%29.png/130px-Donkey_%28Shrek%29.png"}}
        style={{width: 200, height: 200}}
        />
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
