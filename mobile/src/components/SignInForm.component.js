import React from "react";
import { View } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";

function SignInForm() {
    return(
        <View>
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
        </View>
)
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
    }
});

export default SignInForm