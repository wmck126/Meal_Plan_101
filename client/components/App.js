import React, {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignupPage from '../pages/LoginSignupPage';
import SignUp from './Signup';
import Login from './Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  // if (!user) return (
  //   <NavigationContainer>
  //     <Stack.Screen name="Login" component={Login} onLogin={setUser} />
  //   </NavigationContainer>
  //   )

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignup">
        <Stack.Screen name="LoginSignup" component={LoginSignupPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} onLogin={setUser}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


