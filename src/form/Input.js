import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

export default(props) => {
    return (
        <View style={{
            marginBottom: 10
        }}>
            <TextInput
                keyboardType={props.tipe ? props.tipe: 'ascii-capable'}
                style={{
                borderRadius: 5,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'grey',
                paddingHorizontal: 10,
                backgroundColor: 'white'
            }}
            onChangeText={(text)=>{props.onChangeText(text)}}
                value={props.value}
                placeholder={props.placeholder}/>
        </View>
    )
}