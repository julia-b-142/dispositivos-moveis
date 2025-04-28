import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NavegacaoPilha from "./routes/NavegacaoPilha";
import NavegacaoAbaInferior from "./routes/NavegacaoAbaInferior";
import NavegacaoAbaSuperior from "./routes/NavegacaoAbaSuperior";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavegacaoPilha/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;