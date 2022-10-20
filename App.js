import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const App = () => {
  const add = () => {

  }

  const sub = () => {

  }

  const mul = () => {

  }

  const div = () => {
    
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.number}>
        <Text style={styles.calcVal}>0</Text>
      </View>
      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biggerBtn}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]}>
          <Text style={styles.textStyle}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]}>
          <Text style={styles.textStyle}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]}>
          <Text style={styles.textStyle}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]}>
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.biggerBtn}>
          <Text style={styles.textStyle}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn}>
          <Text style={styles.textStyle}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn]}>
          <Text style={styles.textStyle}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 20,
  },
  btnStyle: {
    backgroundColor: '#787777',
  },
  number: {
    alignItems: 'flex-end',
    textAlign: 'right',
    backgroundColor: 'gray',
    width: '100%',
    height: '20%',
    fontSize: '50%',
  },  
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
  oneRowButtons: {
    flexDirection: 'row', 
    width: '100%', 
    height: '16%'
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
  },
  functBtn: {
    backgroundColor: '#f28507', 
  },
  calcVal: {
    fontSize: 100,
    color: 'white',
  }
});

export default App;
