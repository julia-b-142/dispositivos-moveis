import { View, FlatList } from "react-native";
import { List, Text } from "react-native-paper";

function ListaVertical() {
    const lojas = [
        "Restaurant Asa Sul",
        "Restaurant Asa Norte",
        "Restaurant Tagua",
        "Bar Ceilandia",
        "Bar Sudoeste",
        "Lanchonete Gama",
        "Pizzaria Nucleo"
    ]

    return (
        <View>
            <Text variant="titleMedium">Lojas</Text>
            <FlatList
                data={lojas}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <List.Item
                        title={item}
                        description={"* 4,8"}
                    />
                )}
            />
        </View>
    );
}

export default ListaVertical;