import React from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform} from 'react-native';
import styles from './styles'

const AddTask = () => {
    return (
        <View>
           <KeyboardAvoidingView 
                style={styles.writeTaskWrapper}
                behavior = {Platform.OS === 'ios'?'padding':'height'}
            >   
               <TextInput style={styles.input} placeholder="Write a task..."></TextInput>
               <TouchableOpacity 
                style={styles.addWrapper}>
                    <View>
                    <Text style={styles.addText}>+</Text>
                    </View>

                </TouchableOpacity>
               
            </KeyboardAvoidingView> 
        </View>
    )
}

export default AddTask;
