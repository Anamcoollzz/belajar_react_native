import React from 'react'
import {View, Text, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TombolTambah from './../form/TombolTambah'

export default function ({route, navigation}) {
    const options = {
        title: 'Data Mahasiswa'
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<TombolTambah onPress={()=>{
                navigation.navigate('MahasiswaTambah')
            }}/>)
        });
    }, [navigation]);
    return (
        <View>
            <Text>Halo {route.params.nama}</Text>
        </View>
    )
}