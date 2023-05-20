import { SafeAreaView } from 'react-native';
import { Text, Button } from "react-native-elements";

import { ThemeProvider } from "./src/context";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text>App.js</Text>
        <Button title="Cambiar dark light mode"></Button>
      </SafeAreaView>
    </ThemeProvider>
  );
}