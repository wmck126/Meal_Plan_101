import * as React from 'react'
import {Button, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function LoginSignupPage({navigation}){
    return(
        <View>
            <Text>Welcome!</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Sign up"
                onPress={() => navigation.navigate('SignUp')}
            />
            
        </View>
    )
}