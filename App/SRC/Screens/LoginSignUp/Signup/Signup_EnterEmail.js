import { StyleSheet, Text,TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { goback,containerFull, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../CommonCss/pagecss'
import { formbtn,formHead2,formInput } from '../../../CommonCss/formcss';

const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>

      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={goback}>
      <Ionicons name="arrow-back" size={28} color="gray" />
        <Text style={{
          color:'gray',
          fontSize:16,
          marginLeft:5,
          fontWeight: 'bold',
        }}>
           Go Back
          </Text>
      </TouchableOpacity>

        <Image source={logo} style={logo1} />
        <Text style= {formHead2}>Create a new account</Text>
        <TextInput placeholder="Enter Your Email" style={formInput} />
       
        <Text style={formbtn}
                onPress={() => navigation.navigate('Signup_EnterVerificationCode')}
            >
                Next
        </Text>
    
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})