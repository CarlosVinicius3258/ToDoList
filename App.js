import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/task/Task'
import AddTask from './components/AddTask/AddTask'

export default function App() {

  return (
    <View style={styles.container}> 
      <View style={styles.taskWrapper}> 
        <Text style={styles.sectionTitle}> Todays' Tasks</Text>
        <View style={styles.items}>
            <Task text="Hey man"/>
            <Task text = "Second Item"/>
            <Task/>
            <Task/>
        </View>
      </View>

      <KeyboardAvoidingView 
                style={styles.writeTaskWrapper}
                behavior = {Platform.OS === 'ios'?'padding':'height'}
            >   
               <TextInput style={styles.input} placeholder="Write a task..."></TextInput>
               <TouchableOpacity 
                style={styles.addWrapper}>
                    
                    <Text style={styles.addText}>+</Text>
                

                </TouchableOpacity>
               
            </KeyboardAvoidingView> 

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
   fontSize: 24,
   fontWeight: 'bold'
  },
  items: {
   marginTop: 30

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    fontSize: 15


  },
  addWrapper: {
    width: 60,
    height:60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1

  },
  addText: {
    fontSize: 22,
  }
});
