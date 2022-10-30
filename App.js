import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { evaluate } from 'mathjs';

const App = () => {
  const [resultData, setResultData] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [all, setAll] = useState('');
  const [orientation, setOrientation] = useState(Orientation.getInitialOrientation());
  const [toEnd, setToEnd] = useState(false);

  Orientation.addDeviceOrientationListener((modeOrientation) => {
    setOrientation(() => modeOrientation);
  })

  const setNumber = (number) => {
    if(toEnd === true) {
      setAll((prev) => prev += (number + ')'));
      setToEnd(() => false);
    } else {
      setAll(prev => prev += number);
    }
    
  }

  const addDot = () => {
    setAll(prev => prev += '.')
  }

  const chooseOperation = (number) => {
    if(number === 'sqrt(' || number === 'log(' || number === 'log10(') {
      setToEnd(() => true);
    }
    setAll(prev => prev += number)
  }

  const clear = () => {
    setAll('');
    setResultData('');
    setShowResult(false);
  }

  const result = () => {
    setShowResult(true);
    setResultData(evaluate(all));
  }

  const setPlusOrMinus = () => {
    setAll(prev => prev += '-');
  }

  if(orientation === 'PORTRAIT') {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.number}>
          <Text style={styles.calcVal}>
            {!showResult &&
              all
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
          <TouchableOpacity style={[styles.oneBtn, styles.functBtn ]} onPress={() => chooseOperation('*')}>
            <Text style={styles.textStyle}>x</Text>
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
      
    )
  }
  else if(orientation === 'LANDSCAPE-LEFT' || 'LANDSCAPE-RIGHT') {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.number}>
          <Text style={styles.calcValLandscape}>
            {!showResult &&
              all
            }
            {
              showResult &&
              resultData
            }
          </Text>
        </View>
        <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => chooseOperation('sqrt(')}>
            <Text style={styles.textStyleLandscape}>sqrt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('!')}>
            <Text style={styles.textStyleLandscape}>!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={clear}>
            <Text style={styles.textStyleLandscape}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={setPlusOrMinus}>
            <Text style={styles.textStyleLandscape}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('%')}>
            <Text style={styles.textStyleLandscape}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneBtnLandscape, styles.functBtn]} onPress={() => chooseOperation('/')}>
            <Text style={styles.textStyleLandscape}>/</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('e^')}>
            <Text style={styles.textStyleLandscape}>e^x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('10^')}>
            <Text style={styles.textStyleLandscape}>10^x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('7')}>
            <Text style={styles.textStyleLandscape}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('8')}>
            <Text style={styles.textStyleLandscape}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('9')}>
            <Text style={styles.textStyleLandscape}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneBtnLandscape, styles.functBtn ]} onPress={() => chooseOperation('*')}>
            <Text style={styles.textStyleLandscape}>x</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.oneRowButtons}>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => chooseOperation('log(')}>
            <Text style={styles.textStyleLandscape}>ln</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => chooseOperation('log10(')}>
            <Text style={styles.textStyleLandscape}>log10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('4')}>
            <Text style={styles.textStyleLandscape}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('5')}>
            <Text style={styles.textStyleLandscape}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('6')}>
            <Text style={styles.textStyleLandscape}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneBtnLandscape, styles.functBtn ]} onPress={() => chooseOperation('-')}>
            <Text style={styles.textStyleLandscape}>-</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('e*')}>
            <Text style={styles.textStyleLandscape}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('^2')}>
            <Text style={styles.textStyleLandscape}>x^2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('1')}>
            <Text style={styles.textStyleLandscape}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('2')}>
            <Text style={styles.textStyleLandscape}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('3')}>
            <Text style={styles.textStyleLandscape}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneBtnLandscape, styles.functBtn ]} onPress={() => chooseOperation('+')}>
            <Text style={styles.textStyleLandscape}>+</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.oneRowButtons}>
        <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => chooseOperation('PI*')}>
            <Text style={styles.textStyleLandscape}>PI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={() => setNumber('^3')}>
            <Text style={styles.textStyleLandscape}>x^3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.biggerBtnLandscape} onPress={() => setNumber('0')}>
            <Text style={styles.textStyleLandscape}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBtnLandscape} onPress={addDot}>
            <Text style={styles.textStyleLandscape}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneBtnLandscape, styles.functBtn]} onPress={result}>
            <Text style={styles.textStyleLandscape}>=</Text>
          </TouchableOpacity>
        </View>
  
      </View>
      
    )
  }
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
  oneRowButtons: {
    flexDirection: 'row', 
    width: '100%', 
    height: '16%'
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
  },
  textStyleLandscape: {
    fontSize: 20,
    color: 'white',
  },
  functBtn: {
    backgroundColor: '#f28507', 
  },
  calcVal: {
    fontSize: 100,
    color: 'white',
  },
  calcValLandscape: {
    fontSize: 50,
    color: 'white',
  }
});

export default App;
