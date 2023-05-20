import { SafeAreaView } from 'react-native';
import { Text, Button } from "react-native-elements";

import { ThemeProvider } from "./src/context";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <ThemeProvider>
      <Text></Text>
      <Text>We are in App.js</Text>
      <Text></Text>
      
      <RootNavigation></RootNavigation>
    </ThemeProvider>
  );
}