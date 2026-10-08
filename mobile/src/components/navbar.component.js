import React from "react";
import {Text, StyleSheet, View, Pressable } from "react-native"


/* export default function Menu({it1, it2, it3}  ) {
    return(
            <View> 
                <Text style = {styles}>{it1}</Text>
                <Text style = {styles}>{it2}</Text>
                <Text style = {styles}>{it3}</Text> 
            </View>
    );
} */


export default function Navbar({ itens }) {
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
})
