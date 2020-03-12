import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from '@ui-kitten/components';
import corona from '../assets/corona.png'

export default function Home(props) {
  const {navigation : {navigate}} = props
  
  return (
    <View style={styles.page}>
      <Image source={corona} style={styles.image} />
      <Text style={styles.title}>CORONAVIRUS TRACKER</Text>
      <View style={styles.container}>
        <Button style={styles.button} appearance='outline' status='warning' onPress={() => navigate('Death')}>
          Deaths
          </Button>
        <Button style={styles.button} appearance='outline' status='warning' onPress={() => navigate('Recovered')}>
          Recovered
          </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#48655e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  button: {
    padding: 0,
    margin: 8,
    height: 110,
    width: 110,
    textAlign: 'center'
  }, 
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 8
  },
});