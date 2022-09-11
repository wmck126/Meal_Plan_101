import React, {useState} from 'react'
import { StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';

export default function Login({onLogin}){
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    //Add fetch request here:
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userName, password}),
        })
        .then((r) => {
            if (r.ok){
                r.json().then((user) => onLogin(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={userName}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
            />
            <Button
                title="Login"
                onPress={handleSubmit}
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