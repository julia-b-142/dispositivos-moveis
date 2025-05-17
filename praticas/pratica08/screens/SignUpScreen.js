import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido!").required("E-mail é obrigatóro!"),
    senha: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória!"),
    confirmarSenha: Yup.string().oneOf([Yup.ref("senha"), null], "As senhas não coincidem").required("Confirme a senha")
});

function SignUpScreen() {
    const {control, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)});
    const onSubmit = (data)=>{
        alert("Conta criada com sucesso!");
    }

    return (
        <View style={{padding: 16, flex: 1}}>
            <Controller control={control}
            name="nome"
            render={({field:{onChange, value}}) =>(
                <TextInput placeholder="Nome"
                value={value}
                onChangeText={onChange}
                error={!!errors.nome}/>
            )}>

            </Controller>

            <TextInput placeholder="E-mail" keyboardType="email"></TextInput>
            <TextInput placeholder="Senha" secureTextEntry></TextInput>
            <TextInput placeholder="Confirmar Senha"></TextInput>
            <Button onPress={() => { }}>Entrar</Button>
            <TouchableOpacity>
                <View style={{alignItems: "center"}}>
                    <Text>Voltar para o Login</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default SignUpScreen;