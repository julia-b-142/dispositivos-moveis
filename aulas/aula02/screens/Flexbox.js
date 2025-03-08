import { View } from "react-native";

function Flexbox(){
  return (
  <View style={{flex: 1, 
  flexDirection: "column", 
  justifyContent: "space-evelyn",
  alignItems: "stretch", //ele é o contrário do flex direction linha x coluna
  backgroundColor: "red"}}>
    <View style={{width:"100%",
    marginTop: 100,
    borderColor: "white",
    borderWidth: 2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
      backgroundColor: "blue"}}>
      </View>
    {/*<View style={{height:50, width:50,
      backgroundColor: "green"}}>
      </View>
    <View style={{height:50, width:50,
      backgroundColor: "yellow"}}>
      </View>*/}
  </View>);
}

export default Flexbox;