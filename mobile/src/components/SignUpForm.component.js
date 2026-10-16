import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View>
            <TextInput
                placeholder="Nome de usuario"
                value={username}
                onChangeText={setUsername}
            >
            </TextInput>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}>

            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
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
})

export default SignUpForm

/* Adson Code
import React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native"

export default function SignUpForm() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    return(
           <View style={styles.container}>
            <TextInput style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
           </View>
    );
};

const styles = StyleSheet.create({
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
}) */