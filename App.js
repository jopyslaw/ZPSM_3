/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const [show, setShow] = useState(false);
  const onPress = () => {
    setShow(!show);
  }

  return (
    <View style={styles.sectionContainer}>
      <View>
        <Text style={styles.textCenter}>Zadanie 2</Text>
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
          { show &&
            <Text style={styles.textCenter}>Ukryj</Text>
          }
          {
            show ||
            <Text style={styles.textCenter}>Pokaż</Text>
          }
          
        </TouchableOpacity>
      </View>
      <View>
        { show &&
          <Text style={styles.textCenter}>Nazywam się Konrad Jop</Text>
        }
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",  
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 20,
  },
  btnStyle: {
    backgroundColor: '#787777',
  }
});

export default App;
