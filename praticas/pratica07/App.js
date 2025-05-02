import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import RecoverScreen from "./screens/RecoverScreen";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <RecoverScreen/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
