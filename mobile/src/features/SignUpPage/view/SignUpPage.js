import React from "react";
import { View, StyleSheet, Text, CodegenTypes } from "react-native";
import Navbar from "../../../components/navbar.component.js";
import  GetMenuComponents  from "../../../data/MenuComponents";

function SignUpPage({ navigation }) {
    return (
        <View>
            <Navbar
                logoImg={GetMenuComponents("naologado").logoImg}
                itens={GetMenuComponents("naologado").itens}
                navigation={navigation}></Navbar>
            <Text>Esta e a pagina de Cadastro</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Navbar: {
        gap: 5,
        backgroundColor: '#274871',
        borderRadius: 10,
    },
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
    },
});

export default SignUpPage;

/* Adson Code

function SignUpPage({ navigation }) {
    return (
        <View>
            <Navbar
                itens={[
                    { label: "HOME", pageName: "Home" },
                    { label: "Sign In", pageName: "SignIn" },
                    { label: "Sign UP", pageName: "SignUp" },
                ]}
                navigation={navigation}></Navbar>
            <Text>Esta e a pagina de Cadastro</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default SignUpPage */