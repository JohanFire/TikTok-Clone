import { Text } from "react-native-elements";

import { ThemeProvider } from "./src/context";
import { RootNavigation } from "./src/navigation/RootNavigation";
import "./src/utils/yup-methods";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation></RootNavigation>
    </ThemeProvider>
  );
}