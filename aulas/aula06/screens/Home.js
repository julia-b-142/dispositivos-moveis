import { View, Text, Button} from 'react-native';

function Home({ navigation }) {
    return <View style={{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"}}>
            <Text>Home</Text>
            <Button title="Ir p/ Perfil"
            onPress={() =>
                 navigation.navigate("Perfil", 
                 {id: 1, nome: "Jose"}
                 )}
            />
        </View>
}

export default Home;