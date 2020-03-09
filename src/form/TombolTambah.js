import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default(props) => {
    return (<Icon
        style={{
        marginRight: 10
    }}
        size={20}
        name="plus"
        onPress={props.onPress}/>)
}