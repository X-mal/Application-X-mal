import React from 'react';
import { View } from 'react-native';
import Navbar from '../../../components/navbar.component.js';
import SignUpForm from '../../../components/SignUpForm.component.js';
export default function HomePag() {
    return (
        <View>
                <Navbar
                    itens={[
                        { label: "HOME", link: "http://localhost" },
                        { label: "google", link: "https://google.com" },
                        { label: "github", link: "https://github.com" },
                    ]}
                />
                <SignUpForm></SignUpForm>
        </View>
  );
}


