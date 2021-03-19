import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/task/Task'


export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
  Keyboard.dismiss() // It makes the keyboard dismiss when the add buttom is clicked
  setTaskItems([...taskItems, task]);
  setTask(null); // It erases the state function after add the task in the array
}

const handleCheckTask = (index) => {
  let taskItemsCopy = [...taskItems];
  taskItemsCopy.splice(index, 1);
  setTaskItems(taskItemsCopy);
}
  
  return (
    <View style={styles.container}> 
      <View style={styles.taskWrapper}> 
        <Text style={styles.sectionTitle}> Todays' Tasks</Text>
        <View style={styles.items}>
            {taskItems.map((item, index) => (
              <TouchableOpacity key = {index} onPress= {() => handleCheckTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
              
            ))}
        </View>
      </View>

      <KeyboardAvoidingView 
                style={styles.writeTaskWrapper}
                behavior = {Platform.OS === 'ios'?'padding':'height'}
            >   
               <TextInput style={styles.input} value={task} onChangeText = {text => setTask(text)} placeholder="Write a task..."></TextInput>
     
               <TouchableOpacity 
                style={styles.addWrapper}
                onPress={handleAddTask}
                >
                    
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
