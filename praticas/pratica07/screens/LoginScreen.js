import { View, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

function LoginScreen({ navigation }) {
    return (
        <View>
            <View>
                <TextInput placeholder="E-mail"></TextInput>
                <TextInput placeholder="Senha"></TextInput>
            </View>
            <View style={{ align: "center" }}>
                <Button onPress={() => { }}>Entrar</Button>
                <View style={{ flexDirection: "row", justifyContent:"center" }}>
                    <Text> Esqueceu sua senha? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: "purple" }}>Recuperar Senha</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default LoginScreen;