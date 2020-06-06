import React from "react";
import { View, Text, Icon } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native";
import HomeScreen from "../component/home/home";
import SideBar from "../component/sidebar/sidebar";
import Profile from "../component/profile";
import HomeScreen2 from "../component/home/home2";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function InitialScreen(props) {
  const { navigation } = props;
  console.log(navigation, "line no 17")
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>

        <Text>Goto Home</Text>
      </TouchableOpacity>
    </View>
  )
}


const _HomeWithTabs = () => {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="HomeScreen2" component={HomeScreen2} />
   </Tab.Navigator>
  )
}


function DrawerScreen(props) {
  
  const { navigation } = props;
  return (
    <Drawer.Navigator drawerType={"front"}
      drawerContent={() => <SideBar navigation={navigation} />}

    >
      <Drawer.Screen

        component={_HomeWithTabs} name="HomeScreenWithTabs"

      />
      <Drawer.Screen

        component={Profile} name="ProfileScreen"

      />
    </Drawer.Navigator>
  )
}



export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial"
          options={{ headerShown: false }}
          component={InitialScreen}
        />


        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerShown: false,
            headerLeftContainerStyle: { padding: 10 }

          }}
          component={DrawerScreen}


        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}