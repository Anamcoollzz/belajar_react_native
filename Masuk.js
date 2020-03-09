import * as React from 'react';
import { TouchableHighlight, StyleSheet, TextInput, Button, View, Text } from 'react-native';

const styles = StyleSheet.create({
    form: {
        width: '100%',
        marginBottom: 10,
        height: 50,
        borderRadius: 10
    },
    input: {
        borderColor: '#aaaaaa',
        borderWidth: 1,
        paddingHorizontal: 10
    },
    tombol: {
        backgroundColor: '#0088ff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});


export default class MasukScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: 'admin',
            password: 'admin',
        }
    }

    _masuk(){
        let error = ''
        if(this.state.email.trim() == ''){
            error = 'Email tidak boleh kosong\n'
        }
        if(this.state.email.trim() == ''){
            error += 'Password tidak boleh kosong'
        }
        if(error.trim() != ''){
            alert(error)
            return
        }
        if(this.state.email == 'admin' && this.state.password == 'admin'){
            this.props.navigation.navigate('Welcome', {
                nama: 'Hairul Anam'
            })
        }else{
            alert('Email dan password salah')
        }
    }

    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text style={{fontSize: 30}}>Selamat datang</Text>
            <Text style={{marginBottom: 30}}>silakan masuk untuk melanjutkan</Text>
            <TextInput
                style={[styles.form, styles.input]}
                placeholder="Email"
                value={this.state.email}
                onChangeText={(email)=>{
                    this.setState({email})
                }}
            />
            <TextInput
                style={[styles.form, styles.input]}
                placeholder="Password"
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(password)=>{
                    this.setState({password})
                }}
            />
            <TouchableHighlight 
                onPress={this._masuk.bind(this)}
                style={[styles.tombol, styles.form]}>
                <Text style={styles.tombol}>Masuk</Text>
            </TouchableHighlight>
        </View>
        );
  }
}