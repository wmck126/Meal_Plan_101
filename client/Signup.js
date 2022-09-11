import { StyleSheet, TextInput, SafeAreaView } from 'react-native';
import React, {useState} from 'react'

export default function SignUp ({onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                passwordConfirmation: passwordConfirmation,
            }),
        })
        .then((r) => r.json())
        .then(onLogin)
    }
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                value={setPassword}
                onChangeText={setPasswordConfirmation}
                placeholder="Password Confirmation"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})