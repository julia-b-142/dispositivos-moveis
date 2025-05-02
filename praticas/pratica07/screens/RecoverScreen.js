import { Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

function RecoverScreen({ navigation }) {
    return (
        <View>
            <TextInput placeholder="E-mail"></TextInput>
            <TouchableOpacity>
                <Text style={{justifyContent:"center"}}> Recuperar a Senha</Text>
            </TouchableOpacity>
            <Button onPress={()=>{}}>Voltar para o Login</Button>
        </View>

    )
}

export default RecoverScreen;