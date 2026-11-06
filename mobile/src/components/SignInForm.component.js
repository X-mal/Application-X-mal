/* Codigo antigo do SignInForm.component.js

import React from "react";
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
export default SignInForm */



import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function SignInForm({ data, onChangeData }) {
    return (
        <View>
            <TextInput
                placeholder="Email"
                value={data.email}
                onChangeText={(value) => onChangeData("email", value)}
                style={styles.input}
                placeholderTextColor="#7b7b7b"
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Senha"
                value={data.password}
                onChangeText={(value) => onChangeData("password", value)}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#7b7b7b"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#f3f4f6",
        borderWidth: 1,
        borderColor: "#000000",
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


export default SignInForm