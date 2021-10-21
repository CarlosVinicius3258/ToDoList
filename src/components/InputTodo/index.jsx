import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'

const InputTodo = () => {
    const [value, setValue] = useState('')
    const handleTextChange = (value) => {
        setValue(value)
    }   
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={'Value'} onChangeText={handleTextChange}/>
            <TouchableHighlight style={styles.add}>
                <Text style={styles.addText}>+</Text>
            </TouchableHighlight>
        </View>
    )
}

export default InputTodo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
        padding: 10,
    },
    add: {
        paddingHorizontal: 8,
        marginLeft: 10,
    },
    addText: {
        fontSize: 30,

    },
    input: {
        marginLeft: 5,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        width: '90%',
        paddingLeft: 8,

    },
})
