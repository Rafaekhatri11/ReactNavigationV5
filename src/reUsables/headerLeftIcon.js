import React from "react";
import { View, Icon, Header, Left, Right, Body, Title } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

// ...


const CustomerHeader = ({ name, type, style, navigation,Titlename }) => {

    const isDrawerOpen = useNavigation();
    return (

        <Header style={styles.HeaderStyle}>
            <Left >
                <TouchableOpacity onPress={() =>isDrawerOpen.dispatch(DrawerActions.openDrawer())}>
                    <Icon
                        name={name}
                        type={type}
                        style={style}

                    />
                </TouchableOpacity>
            </Left>
            <Body>
                <Title style={styles.Title}>
                        {Titlename}
                </Title>
            </Body>
        </Header>
    )
}



export default CustomerHeader;


const styles = StyleSheet.create({
    HeaderStyle: {
        backgroundColor: 'white'
    },
    Title:{
        color:'black',
        textAlign:"center",
        width:'60%'
    },
   
})