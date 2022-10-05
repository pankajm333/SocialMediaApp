import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './SRC/Screens/LoginSignUp/Login/Login';
import Signup_EnterEmail from './SRC/Screens/LoginSignUp/Signup/Signup_EnterEmail';
import Signup_EnterVerificationCode from './SRC/Screens/LoginSignUp/Signup/Signup_EnterVerificationCode';
import Signup_ChoosePassword from './SRC/Screens/LoginSignUp/Signup/Signup_ChoosePassword';
import Signup_ChooseUserName from './SRC/Screens/LoginSignUp/Signup/Signup_ChooseUserName';
import Signup_AccountCreated from './SRC/Screens/LoginSignUp/Signup/Signup_AccountCreated';

import ForgotPassword_EntereEmail from './SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_EntereEmail';
import ForgotPassword_EnterVerificationCode from './SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_EnterVerificationCode';
import ForgotPassword_ChoosePassword from './SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_AccountRecovered from './SRC/Screens/LoginSignUp/ForgotPassword/ForgotPassword_AccountRecovered';

import Mainpage from './SRC/Screens/Mainpage/Mainpage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>

        <Stack.Screen name="Login" component={Login} 
        options={{
          // animation: 'slide_from_right'
        }}

        />
        
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_ChooseUserName" component={Signup_ChooseUserName} />
        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />
       
        <Stack.Screen name="ForgotPassword_EntereEmail" component={ForgotPassword_EntereEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={ForgotPassword_EnterVerificationCode} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />
        
        
        <Stack.Screen name="Mainpage" component={Mainpage} />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});