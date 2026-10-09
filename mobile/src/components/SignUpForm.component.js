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
})
