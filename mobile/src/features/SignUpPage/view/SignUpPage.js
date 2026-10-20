import React from "react";
import { View, StyleSheet, Text, CodegenTypes, Image } from "react-native";
import Navbar from "../../../components/navbar.component.js";
import  GetMenuComponents  from "../../../data/MenuComponents";
import { me } from "../../../data/MenuComponents";
import YouTubeVideo from "../../../components/youtube.component.js";
const meme = me();

function SignUpPage({ navigation }) {
    return (
        <View>
            <Navbar
                logoImg={GetMenuComponents("naologado").logoImg}
                itens={GetMenuComponents("naologado").itens}
                navigation={navigation}></Navbar>
            <Text>Esta e a pagina de Cadastro</Text>
            <Image source={meme} style={{ width: 400, height: 400 }} />
            <Text>depois da imagem</Text>
            <YouTubeVideo></YouTubeVideo>
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
    image: {
        width: 200,
        height: 200,
        boxShadow: '0px 4px 6px rgba(249, 249, 198, 0.67)'
    }
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