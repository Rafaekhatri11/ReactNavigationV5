
import React from "react";
import { View ,Text , Icon} from "native-base";
import CustomerHeader from "../../reUsables/headerLeftIcon";



function HomeScreen2() {
    
    return (
      <View>
           <CustomerHeader
              name="menu"
              type="Entypo"
              Titlename={"Home2"}
            />
        <Text style={{textAlign:'center'}}>Home2 Screen</Text>
      </View>
    );
  }

  export default HomeScreen2;