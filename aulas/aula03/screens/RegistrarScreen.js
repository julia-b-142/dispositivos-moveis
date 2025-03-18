import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";

function RegistrarScreen() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appTitle}>Criar Conta</Text>
            </View>
            <View style={styles.formRegister}>   
                <TextInput placeholder="Nome" style={styles.input}/>
                <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.input}/>
                <TextInput secureTextEntry placeholder="Senha" style={styles.input}/>
                <TextInput secureTextEntry placeholder="Confirmar Senha" style={styles.input}/>
                <Button title="Registrar"></Button>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    appBar: {
        height: 64,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "center",
    elevation: 3,
marginBottom: 8},
appTitle:{
    fontSize: 24,
    color: "white"},
    formRegister:{
        flex:1,
        paddingHorizontal: 16},
        input:{
            padding: 16,
            borderWidth:1,
            borderColor: "blue",
            borderRadius:8,
            marginBottom: 8}
})

export default RegistrarScreen;