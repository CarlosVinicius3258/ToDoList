import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native'

const Todo = (props) => {
    const {descr, checked} = props;
    return (
        <View>
            <View style={styles.container}>
            <TextInput style={styles.descr} value={'Descr'}/>
            <TouchableHighlight style={styles.checker}>
                <Text></Text>
            </TouchableHighlight>
            
            </View>
            <View style={styles.line}></View>
        </View>
        
        
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '100%',
        padding: 10,
    },
    checker: {
        borderWidth: 1.5,
        borderRadius: 3,
        marginRight: 10,
        paddingHorizontal: 12,

    },
    descr: {
        marginLeft: 5,
        textAlign: 'justify',
    },
    line: {
        marginTop: 3,
        borderWidth:0.3,
        borderColor: 'gray'
    }
})
