import { useContext } from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";

function Login({ navigation }) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ marginBottom: 8 }}
            label="E-mail"
            mode="outlined"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ marginBottom: 8 }}
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button
        mode="contained"
        onPress={handleSubmit()}
        style={{ marginBottom: 8 }}
      >
        Entrar
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Registrar")}>
        Registrar
      </Button>
    </View>
  );
}

export default Login;