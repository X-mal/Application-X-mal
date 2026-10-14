import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import SignInModal from "./SignInModal.component";
import GetMenuComponents from "../data/MenuComponents.js";


/* export default function Menu({it1, it2, it3}  ) {
    return(
            <View> 
                <Text style = {styles}>{it1}</Text>
                <Text style = {styles}>{it2}</Text>
                <Text style = {styles}>{it3}</Text> 
            </View>
    );
} */


/* export default function Navbar({ itens }) {
    return(
            <View style={styles.container}>
                {
                    itens.map((item, index)=>(
                        <Pressable
                            key={index}
                            onPress={()=> {Linking.openURL(item.link)}}
                            style={styles.linkbox}>
                            <Text style={styles.linktext}>{item.label}</Text>
                        </Pressable>
                    ))
                } 

            </View>
    );
}; */

/* function Navbar({ logoImg, itens, navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
                resizeMode="contain"></Image>
            {
                itens.map((item, index) => (
                    <Pressable
                        key={index}
                        onPress={() => { navigation.navigate(item.pageName) }}
                        style={styles.linkbox}>
                        {
                            item.type === "text" ? (
                                <Text style={styles.linktext}>{item.label}</Text>
                            ) : (
                                <Image
                                    source={item.icon}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            )
                        }
                    </Pressable>
                ))
            }
        </View>
    );
} */

  /*   Adson Code
    import React, { useState } from "react";
import {Text, StyleSheet, View, Pressable } from "react-native"
import SignInModal from "./SignInModal.components";

export default function Menu({it1, it2, it3}  ) {
    return(
            <View> 
                <Text style = {styles}>{it1}</Text>
                <Text style = {styles}>{it2}</Text>
                <Text style = {styles}>{it3}</Text> 
            </View>
    );
} 


export default function Navbar({ itens }) {
    const [signinmodalV, setModalSignInV] = useState(false);
    const handleSignIN = ({email, password}) => {
        //Logica de programação para login com API
    }
    return(
            <View style={styles.container}>
                {
                    itens.map((item, index)=>(
                        <Pressable
                        key={index}
                        onPress={()=> {Linking.openURL(item.link)}}
                        style={styles.linkbox}>
                            <Text style={styles.linktext}>{item.label}</Text>
                        </Pressable>
                    ))
                } 

            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#6289d1',
        borderRadius: 10,
    },
    linkbox:{
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    linktext:{
        color: '#080808',
         fontSize: 16
    }
}) */


  /*  copia */
    
    function Navbar({ navigation }) {
    const menu = GetMenuComponents("naologado", {
        home: () => navigation.navigate("Home"),
        signUp: () => navigation.navigate("SignUp"),
        signIn: () => setModalSignInV(true),
        profile: () => navigation.navigate("Profile"),
    });
    const [signinmodalV, setModalSignInV] = useState(false);
    const handleSignIn = ({ email, password }) => {
        //Logica de programação
    }
    return (
        <View style={styles.container}>
            <Image
                source={menu.logoImg}
                style={styles.logo}
                resizeMode="contain"></Image>
            {
               menu.itens.map((item, index) => (
                    <Pressable
                        key={index}
                        onPress={item.onPress}
                        style={styles.linkbox}>
                        {
                            item.type === "text" ? (
                                <Text style={styles.linktext}>{item.label}</Text>
                            ) : (
                                <Image
                                    source={item.icon}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            )
                        }
                    </Pressable>
                ))
            }
            <SignInModal
                visible={signinmodalV}
                onClose={() => setModalSignInV(false)}
                mode="signin"
                onSubmit={handleSignIn}>
            </SignInModal>
        </View >
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#6289d1',
        borderRadius: 10,
    },
      logo: {
        width: 100,
        height: 50,
        padding: 4,
    },
    icon: {
        width: 50,
        height: 25,
        padding: 3,
    },
    linkbox:{
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    linktext:{
        color: '#080808',
         fontSize: 16
    }
})
