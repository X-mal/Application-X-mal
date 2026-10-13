import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Navbar from "../../../components/Navbar.component";

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

export default SignUpPage