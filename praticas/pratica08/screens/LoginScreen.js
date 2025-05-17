import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

function LoginScreen({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Login realizado com sucesso!")
    }

    return (
        <View style={{ padding: 16, flex: 1 }}>
            <Controller control={control}
                name="email"
                rules={{ required: "Email é obrigatório!" }}
                render={({ field: { onChange, value } }) => (
                    <TextInput placeholder="E-mail"
                        keyboardType="email"
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.email} />
                )} />
            {errors.email && <Text>{errors.email.message}</Text>}
            <Controller control={control}
                name="senha"
                rules={{ required: "Senha é obrigatório!", minLength: { value: 6, message: "Senha deve ter no mínimo 6 caracteres" }}}
                render={({ field: { onChange, value } }) => (
                    <TextInput placeholder="Senha" 
                    value={value}
                    onChangeText={onChange}
                    error={!!errors.senha}
                    secureTextEntry/>
                )} />
                {errors.senha && <Text>{errors.senha.message}</Text>}

            <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>
            <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
                <View style={{ padding: 16, flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                    <Text>Esqueceu a senha</Text>
                    <Text>Recuperar senha</Text>
                </View>
            </TouchableOpacity>
            <Button onPress={() => navigation.navigate("CriarConta")}>Criar Conta</Button>
        </View>
    );
}

export default LoginScreen;