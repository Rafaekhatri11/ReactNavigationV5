
import React from "react";
import { View ,Text , Icon} from "native-base";
import CustomerHeader from "../../reUsables/headerLeftIcon";



function HomeScreen() {
    
    return (
      <View>
           <CustomerHeader
              name="menu"
              type="Entypo"
              Titlename={"Home"}
            />
        <Text style={{textAlign:'center'}}>Home Screen</Text>
      </View>
    );
  }

  export default HomeScreen;