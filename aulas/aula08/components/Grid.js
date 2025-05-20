import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";

function Grid(){
    const categorias = [
        "Restaurantes",
        "Bares",
        "Lanchonete",
        "Pizzarias",
        "Sorveterias",
        "Cafeterias",
        "Padarias",
        "Mercados"
    ];

    return(
        <View>
            <FlatList
                data={categorias}
                numColumns={2}
                keyExtractor={(item, index)=>index}
                renderItem={({item})=>(
                    <View style={{width: "48%", padding: 16}}>
                        <Button>{item}</Button>
                    </View>

                )}/>
        </View>
    );
}

export default Grid;