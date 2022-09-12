import React, {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSignupPage from './Components/LoginSignupPage';
import SignUp from './Components/Signup';
import Login from './Components/Login';

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginSignupPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} onLogin={setUser}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


