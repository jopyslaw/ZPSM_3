import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default ButtonComponent = ({text, onPress, isLandscape}) => {   
    operationsStyle = [
        '+','-','/','*','='
    ]
    if(!isLandscape) {
        if(operationsStyle.includes(text)){
            return (
                <TouchableOpacity style={[styles.oneBtn, styles.functBtn]} onPress={() => onPress()}>
                    <Text style={styles.textStyle}>{ text }</Text>
                </TouchableOpacity>
            )
        }
        else if(text === '' || text === '0') {
            return (
                <TouchableOpacity style={[styles.biggerBtn]} onPress={() => onPress()} >
                    <Text style={styles.textStyle}>{ text }</Text>
                </TouchableOpacity>
            )        
        }
        return (
            <TouchableOpacity style={styles.oneBtn} onPress={() => onPress()} >
                <Text style={styles.textStyle}>{ text }</Text>
            </TouchableOpacity>
        )
    } else {
        if(operationsStyle.includes(text)){
            return (
                <TouchableOpacity style={[styles.oneBtnLandscape, styles.functBtn]} onPress={() => onPress()} >
                    <Text style={styles.textStyleLandscape}>{ text }</Text>
                </TouchableOpacity>
            )
        }
        else if(text === '0') {
            return (
                <TouchableOpacity style={[styles.biggerBtnLandscape]} onPress={() => onPress()} >
                    <Text style={styles.textStyleLandscape}>{ text }</Text>
                </TouchableOpacity>
            )        
        }
        return (
            <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => onPress()} >
                <Text style={styles.textStyleLandscape}>{ text }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    oneBtn: {
        padding: 10,
        fontSize: '20p%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: '100%',
        backgroundColor: '#787777',
        borderColor: 'black',
        borderWidth: 1,
    },
    biggerBtn: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%',
        height: '100%',
        paddingLeft: 35,
        backgroundColor: '#787777',
        borderColor: 'black',
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 50,
        color: 'white',
    },
    functBtn: {
        backgroundColor: '#f28507', 
    },
    oneBtnLandscape: {
        padding: 10,
        fontSize: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '17%',
        height: '100%',
        backgroundColor: '#787777',
        borderColor: 'black',
        borderWidth: 1,
    },
    biggerBtnLandscape: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '34%',
        height: '100%',
        paddingLeft: 35,
        backgroundColor: '#787777',
        borderColor: 'black',
        borderWidth: 1,
    },
    textStyleLandscape: {
        fontSize: 20,
        color: 'white',
    },
})