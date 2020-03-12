import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';
import axios from 'axios'
import CustomCard from '../components/Card'
import CustomList from '../components/List'

export default function Deaths() {
  const [peoples, setPeople] = useState(null)

  useEffect(() => {
    getDeaths()
  }, [])

  const getDeaths = () => {
    axios.get('http://coronavirus-tracker-api.herokuapp.com/deaths')
    .then(res => {
      setPeople(res.data)
    })
    .catch(err => {
      console.log({err})
    })
  }

  return (
    <Layout style={styles.page}>
      {peoples 
      ?
      <Layout>
        <CustomCard title={'Death'} peoples={peoples} />
        <CustomList title={'Death'} peoples={peoples} />
      </Layout>
      : 
      <View style={styles.container}>
        <Spinner status='danger'/>
      </View>
      }
    </Layout>
  )
}

const styles = StyleSheet.create({
  page: {
    height: '100%'
  },
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:'50%'
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  },
  card: {
    marginVertical: 8,
  },
});