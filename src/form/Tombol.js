import * as React from 'react';
import {TouchableOpacity, Text, View, Button, StyleSheet} from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler';

export default(props) => {
    return (
        <TouchableHighlight
            style={{
            height: 45,
            borderRadius: 5,
            marginTop: 10,
            backgroundColor: '#0a78eb',
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center'
        }}
            underlayColor="#054d83"
            onPress={props.onPress}>
            <Text
                style={{
                alignSelf: 'center',
                color: 'white'
            }}>{props.title}</Text>
        </TouchableHighlight>
    )
}