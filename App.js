import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const App = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [secNum, setSecondNumber] = useState(false);
  const [operation, setOperation] = useState('');
  const [resultData, setResultData] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const setNumber = (number) => {
    if(secNum === false) {
      setFirst(prevNumber => prevNumber += number);
    } else {
      setSecond(prevNumber => prevNumber += number);
    }
    
  }

  const addDot = () => {
    if(secNum === false) {
      setFirst(prev => prev += '.');
    } else {
      setSecond(prev => prev += '.');
    }
  }

  const chooseOperation = (number) => {
    setSecondNumber(true);
    setOperation(number);
  }

  const clear = () => {
    setFirst('');
    setSecond('');
    setSecondNumber(false);
    setOperation('');
    setShowResult(false);
    setResultData(0);
  }

  const result = () => {
    const firstNumber = Number(first);
    const secondNumber = Number(second);
    let resultNum = 0;
    switch(operation) {
      case '+':
        resultNum = firstNumber + secondNumber;
        break;
      case '-':
        resultNum = firstNumber - secondNumber;
        break;
      case 'X':
        resultNum = firstNumber * secondNumber;
        break;
      case '/':
        if(secondNumber === 0) {
          resultNum = 'NaN';
        } else {
          resultNum = firstNumber / secondNumber;
        }
        break
    }
    setShowResult(true);
    setResultData(resultNum.toString());
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.number}>
        <Text style={styles.calcVal}>
          {!showResult &&
            first+operation+second
          }
          {
            showResult &&
            resultData
          }
        </Text>
      </View>
      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn} onPress={clear}>
          <Text style={styles.textStyle}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biggerBtn}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn]} onPress={() => chooseOperation('/')}>
          <Text style={styles.textStyle}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('7')}>
          <Text style={styles.textStyle}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('8')}>
          <Text style={styles.textStyle}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('9')}>
          <Text style={styles.textStyle}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]} onPress={() => chooseOperation('X')}>
          <Text style={styles.textStyle}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('4')}>
          <Text style={styles.textStyle}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('5')}>
          <Text style={styles.textStyle}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('6')}>
          <Text style={styles.textStyle}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]} onPress={() => chooseOperation('-')}>
          <Text style={styles.textStyle}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('1')}>
          <Text style={styles.textStyle}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('2')}>
          <Text style={styles.textStyle}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={() => setNumber('3')}>
          <Text style={styles.textStyle}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]} onPress={() => chooseOperation('+')}>
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.biggerBtn} onPress={() => setNumber('0')}>
          <Text style={styles.textStyle}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneBtn} onPress={addDot}>
          <Text style={styles.textStyle}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.oneBtn, styles.functBtn]} onPress={result}>
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
