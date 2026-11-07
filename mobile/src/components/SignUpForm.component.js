import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

function SignUpForm({ data, onChangeData, }) {
    return (
        <View>
            <TextInput
                placeholder="RA"
                value={data.ra}
                style={styles.input}
                onChangeText={(value) => onChangeData("ra", value)}>
            </TextInput>
            <TextInput
                placeholder="Nome de usuario"
                value={data.username}
                style={styles.input}
                onChangeText={(value) => onChangeData("username", value)}
            >
            </TextInput>
            <TextInput
                placeholder="Email"
                value={data.email}
                style={styles.input}
                onChangeText={(value) => onChangeData("email", value)}>

            </TextInput>
            <TextInput
                placeholder="Senha"
                value={data.pass}
                style={styles.input}
                onChangeText={(value) => onChangeData("pass", value)}>
            </TextInput>
            <TextInput
                placeholder="Curso"
                value={data.curso}
                style={styles.input}
                onChangeText={(value) => onChangeData("curso", value)}>
            </TextInput>

            <Picker
                selectedValue={data.instituto}
                onValueChange={(value) => onChangeData("instituto", value)}
            >
                <Picker.Item label="Selecione o instituto" value="" />
                <Picker.Item label="Técnico" value="tecnico" />
                <Picker.Item label="Faculdade" value="faculdade" />
                
            </Picker>
            <Picker
                selectedValue={data.turno}
                onValueChange={(value) => onChangeData("turno", value)}
            >
                <Picker.Item label="Selecione o turno" value="" />
                <Picker.Item label="Matutino" value="matutino" />
                <Picker.Item label="Noturno" value="noturno" />
            </Picker>
            
        </View>
    );
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


export default SignUpForm

/* Codigo antigo do SignUpForm.component.js
import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
function SignUpForm() {
    const [ra, setRa] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [curso, setCurso] = useState('');
    const [instituto, setInstituto] = useState('');
    const [turno, setTurno] = useState('');
    return (
        <View>
            <TextInput
                placeholder="RA"
                value={ra}
                onChangeText={setRa}
            > 
            </TextInput>
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
            <TextInput
                placeholder="Senha"
                value={pass}
                onChangeText={setPass}
                secureTextEntry
            >
            </TextInput>
            <TextInput
                placeholder="Curso"
                value={curso}
                onChangeText={setCurso}
            >
            </TextInput>
            <TextInput
                placeholder="Instituto"
                value={instituto}
                onChangeText={setInstituto}
            >
            </TextInput>
            <TextInput
                placeholder="Turno"
                value={turno}
                onChangeText={setTurno}
            >
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
        collor: '#bec1c6',
         fontSize: 16
    },
    div:{
        margin: 10
    }
})
export default SignUpForm
 */
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

/* Codigo do professor
    import React, { useState } from "react";
import { TextInput, View } from "react-native";

function SignUpForm({ data, onChangeData }) {
    return (
        <View>
            <TextInput
                placeholder="Nome de usuario"
                value={data.username}
                onChangeText={(value) => onChangeData("username", value)}
            >
            </TextInput>
            <TextInput
                placeholder="Email"
                value={data.email}
                onChangeText={(value) => onChangeData("email", value)}>

            </TextInput>
            <TextInput
                placeholder="Senha"
                value={data.password}
                onChangeText={(value) => onChangeData("password", value)}>
            </TextInput>
        </View>
    );
}

export default SignUpForm */