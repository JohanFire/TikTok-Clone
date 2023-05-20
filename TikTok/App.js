import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';

import { ThemeProvider } from "./src/context";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text>App.js</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}