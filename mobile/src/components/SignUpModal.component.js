import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function SignInModal(visible, onClose, mode, onSubmit) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isSignup = mode === "signup"

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
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

function SignInModal({ visible, onClose, mode, onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isSignIn = mode === "signin";

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : undefined}
                            style={styles.card}
                        >
                            <Text style={styles.title}>
                                {isSignIn ? "Fazer Login" : "Cadastrar"}
                            </Text>

                            <TextInput
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                style={styles.input}
                                placeholderTextColor="#7b7b7b"
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />

                            <TextInput
                                placeholder="Senha"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                style={styles.input}
                                placeholderTextColor="#7b7b7b"
                            />

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => onSubmit({ email, password })}
                            >
                                <Text style={styles.buttonLabel}>
                                    {isSignIn ? "Entrar" : "Criar conta"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.closeText}>Fechar</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: "#327dbb",
        borderRadius: 8,
        marginTop: 40,
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
        color: "#e95656",
        fontSize: 14,
    },

 overlay: {
        flex: 1,
        backgroundColor: "rgba(32, 41, 61, 0.55)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#226f9e",
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
        color: "#fbfbfb",
        marginBottom: 18,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#c8cace",
        borderWidth: 1,
        borderColor: "#a1a1a1",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginBottom: 12,
        fontSize: 15,
        color: "#000000",
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
         backgroundColor: "#fd0303",
        borderRadius: 12,
        paddingVertical: 14,
        
    },
    closeText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 14,
    },
});

export default  SignInModal 