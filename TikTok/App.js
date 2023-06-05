import { Text } from "react-native-elements";

import { ThemeProvider, AuthProvider } from "./src/context";
import { RootNavigation } from "./src/navigation/RootNavigation";
import "./src/utils/yup-methods";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNavigation></RootNavigation> 
      </AuthProvider>
    </ThemeProvider>
  );
}