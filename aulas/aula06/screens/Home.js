import { View, Text} from 'react-native';

function Home(navigation){
    return(
        <View style={{flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'}}>
            <Text>Tela do Home</Text>
            <Button title = "Ir p/ Perfil" 
                onPress={()=> navigation.navigate("Perfil")}
            />
        </View>
    )
}

export default Home;