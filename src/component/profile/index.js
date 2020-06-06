import React from "react";
import { View ,Text , Icon} from "native-base";
import CustomerHeader from "../../reUsables/headerLeftIcon";



function Profile() {
    
    return (
      <View>
           <CustomerHeader
              name="menu"
              type="Entypo"
              Titlename={"Profile"}
            />
        <Text style={{textAlign:'center'}}>Profile Screen</Text>
      </View>
    );
  }

  export default Profile;