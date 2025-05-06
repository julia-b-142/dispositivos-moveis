import { use, useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";


function RedefinirSenha() {
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const trataEnviar = () =>{
        if(!email){
            setErro("E-mail é obrigatório!");
            return;
        }
        if(!email.includes("@")){
            setErro("E-mail inválido!");
            return;
        }
        setEmail("");
        setErro("");
        alert("E-mail enviado!")
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput autoCapitalize="none"
                keyboardType="email-address"
                label={"Email"}
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                style={{ marginBottom: 16 }} />
            <Button mode="contained"
                onPress={trataEnviar}>Enviar</Button>
        </View>
    );
}

export default RedefinirSenha;