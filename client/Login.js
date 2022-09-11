import React, {useState} from 'react'
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

export default function Login(){
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //Add fetch request here:

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