import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native'

const Todo = (props) => {
    const {descr, checked, id, data, setData} = props;

    const handleClickChecker = () => {
        let toDeleteItem = {}
        let index = []
        let newData = []
        data.map(item=>{
            if (item.id === id){
                toDeleteItem = item
            }
        })
        index = data.indexOf(toDeleteItem)
        newData = data;
        newData[index].checked = !newData[index].checked
        console.log(newData);
        setData([...newData]);
    }
    return (
        <View>
            <View style={styles.container}>
            <TextInput style={!checked?styles.descr:styles.descrChecked} value={descr}/>
            <TouchableHighlight style={styles.checker} onPress={handleClickChecker}>
                <Text style={styles.checkerText}>{checked?'X':''}</Text>
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
        paddingTop: 5,
        width: 35,
        height: 35,

    },
    checkerText: {
        textAlign: 'center'
    },
    descr: {
        marginLeft: 5,
        textAlign: 'justify',
    },
    descrChecked: {
        marginLeft: 5,
        textAlign: 'justify',
        textDecorationLine: 'line-through'
    },
    line: {
        marginTop: 3,
        borderWidth:0.3,
        borderColor: 'gray'
    }
})
