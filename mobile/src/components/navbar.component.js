import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import SignInModal from "./SignInModal.component";
import GetMenuComponents from "../data/MenuComponents.js";
import useSignIn from "../features/HomePage/hook/useSignIn.js";


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
    const { handleSignIn, loading } = useSignIn();
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

    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: "#327dbb",
        borderRadius: 8,
        marginTop: 40,
        shadowColor: "#4d799d",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 8,
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
    linkbox: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    linktext: {
        color: "#0e0d0d",
        fontSize: 14,
        
    },

 overlay: {
        flex: 1,
        backgroundColor: "rgba(10, 29, 73, 0.55)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#488b77",
        borderRadius: { topLeft: 18, topRight: 0, bottomLeft: 18, bottomRight: 0 },
        padding: 22,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1f2937",
        marginBottom: 18,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#4675d3",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginBottom: 12,
        fontSize: 15,
        color: "#141414",
    },
    button: {
        backgroundColor: "#0cc737",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 8,
    },
    buttonLabel: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
    },
    closeButton: {
        marginTop: 14,
        alignItems: "center",
    },
    closeText: {
        color: "#c70707",
        fontWeight: "600",
        fontSize: 14,
    },
});

export default Navbar;