/* import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function SignInModal(visible, onClose, mode, onSubmit) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isSignIn = mode === "signin"

    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}>
            <View style={style.overlay}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}>
                </TextInput>
                <TextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry>
                </TextInput>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => onSubmit({ email, password })}>
                    <Text
                        style={style.buttonlabel}
                    >{
                            isSignIn ? "FazerLogin" : "Cadastrar"
                        }</Text>
                </TouchableOpacity>

            </View>

        </Modal>
    );

} */

     /* Adson code
import React, {useState} from "react";
import {Modal ,View, Text, TextInput, TouchbleOpacity, StyleSheet} from "react-native";

export default function SignInModal(visible, onClose, mode, onSubmit){
    
    const [email, setemail] = useState ("");
    const [password, setPassword] = useState ("");

    const isSignIn = mode === "signin";

    return(
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}>
            <View style={style.overlay}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}>
                </TextInput>
                <TextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry>
                </TextInput>
                <TouchbleOpacity
                    style={style.button}
                    onPress={()=> onSubmit({email, password})}>
                    <Text 
                        style={style.buttonlabel}>{
                                isSignIn ? "FazerLogin" : "Cadastrar"
                            }
        
                    </Text>
                </TouchbleOpacity>
            </View>

        </Modal>
    );

};

const style = StyleSheet.create({

});
 */


import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import SignInModal from "./SignInModal.component";
import GetMenuComponents from "../data/MenuComponents.js";

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


const style = StyleSheet.create({

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
        color: "#111827",
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

export default { SignInModal }