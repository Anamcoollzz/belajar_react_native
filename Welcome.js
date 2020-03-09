import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tombol from './src/form/Tombol'

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                padding: 10
            }}>
                <Text style={{marginBottom: 10, alignSelf: 'center'}}>Selamat datang {this.props.route.params.nama}</Text>
                <Tombol title="Data Mahasiswa" onPress={()=>{
                    this.props.navigation.navigate('Mahasiswa', {nama:'Hairul Anam'})
                }} />
                <Button onPress={()=>{
                    this.props.navigation.navigate('Product')
                }} title="Data Produk" />
            </View>
        );
    }
}