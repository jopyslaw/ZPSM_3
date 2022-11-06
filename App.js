import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import { evaluate } from 'mathjs';
import ButtonComponent from './ButtonComponent';

const App = () => {
  const [resultData, setResultData] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [all, setAll] = useState('');
  const [orientation, setOrientation] = useState(Orientation.getInitialOrientation());
  const [toEnd, setToEnd] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  })
  const opertationButtons = ['sqrt', '/', '*', 'log', 'log10', '-', '+', 'PI' ];
  const GlobalData = {
    'sqrt': 'sqrt(',
    'log': 'log(',
    'log10': 'log10(',
    'PI': 'PI*',
    'e^x': 'e^',
    '10^x': '10^',
    'e': 'e*',
    'x^2': '^2',
    'x^3': '^3'
  }
    
  const firstRow = [
    'AC','','/',
  ];
  const secondRow = [
    '7','8','9','*',
  ];

  const thirdRow = [
    '4','5','6','-',
  ];

  const fourthRow = [
    '1','2','3','+',
  ];

  const fifthRow = [
    '0',',','='
  ];

  const btnTabPortrait = [
    firstRow,secondRow,thirdRow,fourthRow,fifthRow 
  ]

  const firstRowLandscape = [
    'sqrt', '!', 'AC', '+/-', '%', '/',
  ];

  const secondRowLandscape = [
    'e^x', '10^x', ...secondRow
  ];

  const thirdRowLandscape = [
    'log', 'log10', ...thirdRow
  ];

  const fourthRowLandscape = [
    'e', 'x^2', ...fourthRow
  ];
  
  const fifthRowLandscape = [
    'PI', 'x^3', ...fifthRow
  ];

  const btnTabLandscape = [
    firstRowLandscape, secondRowLandscape, thirdRowLandscape, fourthRowLandscape, fifthRowLandscape
  ];

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

  const buttonRenderPortrait = () => {
    return btnTabPortrait.map((row, index) => {
      return (
        <View style={styles.oneRowButtons} key={index}>
          {
            row.map((data, index) => {
              if(opertationButtons.includes(data)) {
                return (
                  <ButtonComponent key={index} text={data} onPress={() => chooseOperation(data)} isLandscape={false}></ButtonComponent>
                )
              } else if (data === '=') {
                return (
                  <ButtonComponent key={index} text={data} onPress={result} isLandscape={false}></ButtonComponent>
                )
              } else if (data === 'AC') {
                return (
                  <ButtonComponent key={index} text={data} onPress={clear} isLandscape={false}></ButtonComponent>
                )
              } else if (data === '+/-') {
                return (
                  <ButtonComponent key={index} text={data} onPress={setPlusOrMinus} isLandscape={false}></ButtonComponent>
                )
              } else if (data === ',') {
                return (
                  <ButtonComponent key={index} text={data} onPress={addDot} isLandscape={false}></ButtonComponent>
                )
              } 
              return (
                <ButtonComponent key={index} text={data} onPress={() => setNumber(data)} isLandscape={false}></ButtonComponent>
              )
                 
            })
          }
        </View>
      )
    })
  }

  const ButtonRenderLandscape = () => {
    return btnTabLandscape.map((row, index) => {
      return(
        <View style={styles.oneRowButtons} key={index}>
          {
            row.map((data, index) => {
              if(opertationButtons.includes(data)) {
                if(GlobalData[data]) {
                  return (
                    <ButtonComponent key={index} text={data} onPress={() => chooseOperation(GlobalData[data])} isLandscape={true}></ButtonComponent>
                  )
                } else {
                  return (
                    <ButtonComponent key={index} text={data} onPress={() => chooseOperation(data)} isLandscape={true}></ButtonComponent>
                  )
                }
              } else if (data === '=') {
                return (
                  <ButtonComponent key={index} text={data} onPress={result} isLandscape={true}></ButtonComponent>
                )
              } else if (data === 'AC') {
                return (
                  <ButtonComponent key={index} text={data} onPress={clear} isLandscape={true}></ButtonComponent>
                )
              } else if (data === '+/-') {
                return (
                  <ButtonComponent key={index} text={data} onPress={setPlusOrMinus} isLandscape={true}></ButtonComponent>
                )
              } else if (data === ',') {
                return (
                  <ButtonComponent key={index} text={data} onPress={addDot} isLandscape={true}></ButtonComponent>
                )
              }
              if(GlobalData[data]) {
                return (
                  <ButtonComponent key={index} text={data} onPress={() => setNumber(GlobalData[data])} isLandscape={true}></ButtonComponent>
                )
              } else {
                return (
                  <ButtonComponent key={index} text={data} onPress={() => setNumber(data)} isLandscape={true}></ButtonComponent>
                )
              }
              
            })
          }
        </View>
      )
    })
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
        {buttonRenderPortrait()}
             
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
        {ButtonRenderLandscape()}
  
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
  oneRowButtons: {
    flexDirection: 'row', 
    width: '100%', 
    height: '16%'
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
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
