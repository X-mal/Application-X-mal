function GetMenuComponents(status, actions = {}) {
    const EDAD_logo = require("../../assets/splash-icon.png");
    const MenuComponents = {
        naologado: {
            logoImg: EDAD_logo,
            itens: [
                {
                    label: "HOME",
                    onPress: actions.home || (() => { }),
                    type: "text",
                },
                {
                    label: "Sign UP",
                    onPress: actions.signUp || (() => { }),
                    type: "text",
                },
                {
                    onPress: actions.signIn || (() => { }),
                    type: "icon",
                    icon: require("../../assets/signin_icon.png"),
                },
            ],
        },
        logado: {
            logoImg: EDAD_logo,
            itens: [
                {
                    label: "Profile",
                    onPress: actions.profile || (() => { }),
                    type: "text",
                },
            ],
        },
    };

    return MenuComponents[status];
}

export default GetMenuComponents