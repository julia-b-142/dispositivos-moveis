import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function MeuComponente(){
  return(
    <Text style={{paddingTop:24, fontSize: 24, color: "white"}}>
      Olá, mundo 
    </Text>
    
  )
}

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "blue"}}>
      <MeuComponente/>
      <StatusBar style='auto'/>
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
