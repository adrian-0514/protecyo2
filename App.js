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
      <SafeAreaView style={style.caja1}>
        <View style={style.CUADRO1}>
          <Text style={style.CUADRO1}>1</Text>
        </View>

        <View style={style.CUADRO2}>
          <Text style={style.CUADRO2}>2</Text>
        </View>

        <View style={style.CUADRO3}>
          <Text style={style.CUADRO3}>3</Text>
        </View>
        <View style={style.CUADRO4}>
          <Text style={style.CUADRO4}>4</Text>
        </View>
      </SafeAreaView>

      <SafeAreaView style={style.caja2}>
      <View style={style.DATA1}>
          <Text style={style.TEXTO}>Data 1{"\n"}{"\n"}CINOC</Text>
        </View>
        <View style={style.DATA2}>
          <Text style={style.TEXTO}>Data 2{"\n"}{"\n"}CINOC</Text>
        </View>
        <View style={style.DATA3}>
          <Text style={style.TEXTO}>Data 2{"\n"}{"\n"}CINOC</Text>
        </View>

      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  CUADRO1: {
    backgroundColor: '#ED1424',
    height: 40,
    color: '#ffffff',
    fontSize: 25,
    textAlign:"center",
    width:'20%',
    marginLeft:'40%'
   
  },
  CUADRO2: {
    backgroundColor: '#ED1424',
    height: 40,
    color: '#ffffff',
    fontSize: 25,
    textAlign:"center",
    width:'40%',
    marginLeft:'30%'
  },

  CUADRO3: {
    backgroundColor: '#ED1424',
    height: 40,
    color: '#ffffff',
    fontSize: 25,
    textAlign:"center",
    width:'60%',
    marginLeft:'20%'
  },
  CUADRO4: {
    backgroundColor: '#ED1424',
    height: 40,
    color: '#ffffff',
    fontSize: 25,
    textAlign:"center",
    width:'100%',
    
  },
  DATA1:{
    backgroundColor:'#17202A', 
    height:80,
    width:'30%',
    marginLeft:'33%',
    marginTop:30
  },
  DATA2:{
    backgroundColor:'#17202A', 
    height:80,
    width:'30%',
    marginLeft:'66%',
    marginTop:30
  },
  DATA3:{
    backgroundColor:'#17202A', 
    height:80,
    width:'30%',
    margin:10
  },
  TEXTO:{
    color: '#ffffff',
    textAlign:"center",
    marginTop:10
  }
,
  caja1:{
    borderColor:'#17202A',
    margin:30,
    borderWidth: 5
  },
  caja2:{
    borderColor:'#17202A',
    margin:30,
    borderWidth: 5,
    height:'60%'
    
  }
});