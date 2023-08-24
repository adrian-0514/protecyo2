import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={color.cuadro1}>
          <Text style={color.cuadro1}>1</Text>
        </View>

      </SafeAreaView>
    </>
  );

}


const color = StyleSheet.create({
  cuadro1: {
    backgroundColor: "#FA2307",
    height: '25%',
    marginTop: '10',
    marginleft:54,
    MediaRecorder:25,
    textAlign: 'center'

  },
})
