import {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import apibtc from './components/apibtc';
import post from './components/post';
import Pokedex from './components/Pokedex';

// const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
// const urldosss = "https://jsonplaceholder.typicode.com/posts"

export default function App() {

  return (
    <View style={styles.container}>

      <apibtc/>
      {/* <Post /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
