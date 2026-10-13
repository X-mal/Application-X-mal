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