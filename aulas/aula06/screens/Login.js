import { View, Text, Button } from "react-native";

function Login({navigation}){
    return(
        <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
            <Text> Login</Text>
            <Button title="Entrar" onPress={() => {}}/>
            <Button title="Criar" onPress={() => navigation.navigate("Registrar")}/>
        </View>
    )
}

export default Login;