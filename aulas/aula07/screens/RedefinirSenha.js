import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import * as Yup from 'yup';

function RedefinirSenha() {
  const schema = Yup.object().shape({
    email: Yup.string().required("E-mail é obrigatório!").email("E-mail inválido!"),
    
  });

  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const trataTexto = async (texto) => {
    try{
      setEmail(texto);
      await schema.validate({email: texto});
      setErro("");
    } catch(err){
      setErro(err.errors);
    }

  }

  const trataEnviar = async () => {
    try{
      await schema.validate({email: texto});
      setErro("");
      setEmail("");
      alert("E-mail enviado!")
    } catch(err){
      setErro(err.errors);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        value={email}
        onChangeText={trataTexto}
        mode="outlined"
        error={erro != ""}
      />
      <HelperText type="error" visible={erro != ""}>
        {erro}
      </HelperText>
      <Button mode="contained" onPress={trataEnviar}>
        Enviar
      </Button>
    </View>
  );
}

export default RedefinirSenha;