import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.taskWrapper}> 
        <Text style={styles.sectionTitle}> Todays' Tasks</Text>
        <View style={styles.items}>
          {/*it's a comment */}
        </View>
      </View>
      
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
   
  }
});
