import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NavegacaoGaveta from "./NavegacaoGaveta";
import NavegacaoPilha from "./NavegacaoPilha";

function NavegacaoPrincipal(){
    const {logado} = useContext(AuthContext);

    return(
        <NavigationContainer>
            {logado ? (
                <NavegacaoGaveta/>
            ) : (
                <NavegacaoPilha/>
            )}
        </NavigationContainer>
    )
}

export default NavegacaoPrincipal