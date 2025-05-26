import { useContext, useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { StoreContext } from "../contexts/StoreContext";
import CategoryItem from "../components/CategoryItem";
import StoreItem from "../components/StoreItem";

function HomeScreen(navigation) {
    const { loadData, loading } = StoreContext();
    const useEffect = loadData() //será que é assim??

    return (
        <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
            {loading ? (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <>
                    <CategoryItem />
                    <StoreItem />
                </>
            )}
        </View>

    )

}

export default HomeScreen;