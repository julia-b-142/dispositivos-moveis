import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";

function ForgotPasswordScreen(){
    const [email, setEmail] = useState();
    const [erro, setErro] = useState();

    function validarEmail(){
        if(!email){
            setErro("E-mail é obrigatório!");
        } else if(!email.includes("@")){
            setErro("E-mail inválido!");
        } else{
            setErro("");
            alert("Instruções enviadas para o e-mail");
        }
    }
    return(
        <View style={{padding: 16, flex: 1}}>
            <TextInput placeholder="E-mail"
              value={email} //estado
              onChangeText={setEmail} //alterar o estado
              error={!!erro} //true or false e depois testar
            />
            {erro && <Text>{erro}</Text>}
            <Button onPress={validarEmail}>Enviar</Button>
            <TouchableOpacity>
                <View style={{alignItems: "center"}}>
                <Text>Voltar para o Login</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    );
}

export default ForgotPasswordScreen;