import { SafeAreaProvider } from "react-native-safe-area-context/lib/typescript/src/SafeAreaContext";
import { StoreProvider } from "./contexts/StoreContext";

function App(){
  return(
    <SafeAreaProvider>
      <StoreProvider/>
    </SafeAreaProvider>
  );
}

export default App;