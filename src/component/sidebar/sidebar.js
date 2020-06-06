import React from "react";
import { View, Text, List, ListItem, Left } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";



function SideBar({navigation}){
    console.log(navigation,"line no 8")
    const isDrawerOpen = useNavigation();
    return(
        <View style={styles.container}>
              
                <List>
                    <ListItem onPress={() => {
                        console.log(navigation.navigate("HomeScreenWithTabs"));
                        isDrawerOpen.dispatch(DrawerActions.closeDrawer())
                        }}>
                        <Text>
                            Home
                        </Text>
                    </ListItem>
                </List>
                <List>
                    <ListItem onPress={() => {
                        navigation.navigate('ProfileScreen');
                        isDrawerOpen.dispatch(DrawerActions.closeDrawer())
                        }}>
                        <Text>
                            Profile
                        </Text>
                    </ListItem>
                </List>
        </View>
    )
}


export default SideBar;


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})