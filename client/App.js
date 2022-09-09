import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <Image
        source ={{uri: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Donkey_%28Shrek%29.png/130px-Donkey_%28Shrek%29.png"}}
        style={{height: 400, width: 300, marginTop: 50}}
        />
      <Text style={{marginLeft: 50}}>Hello from donkeh</Text>
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
