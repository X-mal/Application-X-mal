
import React from "react";
import { View, StyleSheet, Text, CodegenTypes } from "react-native";
import Navbar from "../../../components/Navbar.component";
import { MenuComponents } from "../../../data/MenuComponents";

function SignInPage({ navigation }) {
    return (
        <View>
            <Navbar
                logoImg={MenuComponents["naologado"].logoImg}
                itens={MenuComponents["naologado"].itens}
                navigation={navigation}></Navbar>
            <Text>Esta e a pagina de Login</Text>
        </View>
    );


}
const style = StyleSheet.create({
     container:{
        gap: 5,
        backgroundColor: '#4b8ee1',
        borderRadius: 10,
    },
    input:{
        collor: 'fff',
         fontSize: 16
    },
    div:{
        margin: 10
    }   
});

export default SignInPage



/* Adson Code
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Navbar from "../../../components/Navbar.component";

function SignInPage({ navigation }) {
    return (
        <View>
            <Navbar
                itens={[
                    { label: "HOME", pageName: "Home" },
                    { label: "Sign In", pageName: "SignIn" },
                    { label: "Sign UP", pageName: "SignUp" },
                ]}
                navigation={navigation}></Navbar>
            <Text>Esta e a pagina de Login</Text>
        </View>
    );


}

const style = StyleSheet.create({

});

export default SignInPage */