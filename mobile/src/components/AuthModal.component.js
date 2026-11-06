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
/* 
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
import SignInForm from "./SignInForm.component.js";
import SignUpForm from "./SignUpForm.component.js";
import SignIn from "../features/HomePage/service/signIn.service";

function AuthModal({ visible, onClose, mode, onSubmit }) {
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
                            {isSignIn ?
                            <SignInForm
                            ></SignInForm>
                            : <SignUpForm></SignUpForm>
                            }

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

export default  AuthModal */

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
import SignInForm from "./SignInForm.component.js";
import SignUpForm from "./SignUpForm.component.js";

function AuthModal({ visible, onClose, mode, onSubmit }) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        pass: "",
        curso: "",
        instituto: "",
        turno: ""

    });
    const handleChangeData = (field, value) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    };

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

                            {isSignIn ? (
                                <View>
                                    <Text style={styles.title}>
                                        Logar:
                                    </Text>
                                    <SignInForm
                                        data={user}
                                        onChangeData={handleChangeData}></SignInForm>
                                </View>
                            ) : (
                                <View>
                                    <Text style={styles.title}>
                                        Cadastrar:
                                    </Text>
                                    <SignUpForm
                                        data={user}
                                        onChangeData={handleChangeData}></SignUpForm>
                                </View>
                            )}

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => onSubmit({ user })}
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
        input: {
        backgroundColor: "#f3f4f6",
        borderWidth: 1,
        borderColor: "#6f7073",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginBottom: 12,
        fontSize: 15,
        color: "#111827",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(15, 23, 42, 0.55)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#ffffff",
        borderRadius: [18, 0, 18, 0],
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
    button: {
        backgroundColor: "#327dbb",
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
        color: "#327dbb",
        fontWeight: "600",
        fontSize: 14,
    },
});

export default AuthModal;