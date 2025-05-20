import { View, FlatList} from "react-native";
import {Text, Button} from "react-native-paper";

function ListaHorizontal(){
    const categorias = [
        "Restaurantes",
        "Bares",
        "Lanchonete",
        "Pizzarias",
        "Sorveterias"
    ];

    return(
        <View>
            <Text variant="titleMedium">Categorias</Text>
            <FlatList
                data={categorias}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) =>(
                    <Button style={{marginRight: 8}}>{item} </Button>
                )}
            />
        </View>
    );
}

export default ListaHorizontal;
