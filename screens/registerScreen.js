import * as React from "react";
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native";

export default class RegisterScreen extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            password:"",
            name:"",
            zipcode:""
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    placeholder={"Username"} 
                    onChangeText={this.state.username} 
                    placeholderTextColor={"#fffff2"} 
                    style={styles.usernameInputStyle}
                />
                <TextInput 
                    placeholder={"Password"} 
                    onChangeText={this.state.password} 
                    style={styles.passwordInputStyle} 
                    placeholderTextColor={"#fffff2"}
                />
                <TextInput 
                    placeholder={"Password Re-Entry"} 
                    onChangeText={this.state.password} 
                    style={styles.passwordInputStyle} 
                    placeholderTextColor={"#fffff2"}
                />
                <TextInput 
                    placeholder={"Name"} 
                    onChangeText={this.state.username} 
                    placeholderTextColor={"#fffff2"} 
                    style={styles.nameInputStyle}
                />
                <TextInput 
                    placeholder={"Zipcode"} 
                    onChangeText={this.state.password} 
                    style={styles.zipcodeInputStyle} 
                    placeholderTextColor={"#fffff2"}
                />
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>  
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0e0e40",
        alignItems:"center",
        justifyContent:"center",
    },
    usernameInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
        
    },
    passwordInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
    },
    passwordInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
    },
    nameInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
    },
    zipcodeInputStyle:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        padding: 10,
        borderColor:"#fffff2",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 20,
        color: "#fffff2",
        backgroundColor: "#0e0e40",
        marginBottom:15
    },
    registerButton:{
        fontFamily:"ComicSansMS",
        width: 200,
        height: 50,
        justifyContent: "space-evenly",
        alignItems:"center",
        borderRadius: 30,
        backgroundColor:"#fffff2",
    },
    registerButtonText:{
        fontFamily:"ComicSansMS",
        color:"#0e0e40",
        fontSize:24,
    }
})