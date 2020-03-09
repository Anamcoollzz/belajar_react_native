import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

export default(props) => {
    return (
        <View style={{
            padding: 10,
            backgroundColor: '#ddd',
            flex: 1
        }}>
            {props.children}
        </View>
    )
}