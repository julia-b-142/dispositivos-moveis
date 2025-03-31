import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <SafeAreaProvider>
        <ProfileScreen/>
    </SafeAreaProvider>);
}

export default App;
