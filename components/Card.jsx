import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, Card, CardHeader } from '@ui-kitten/components';

export default function CustomCard(props) {
  const { title, peoples } = props

  const Header = () => (
    <CardHeader title={`${title} Case`}/>
  );

  return (
    <Card style={styles.card} header={Header} status='danger'>
      <Text>Last Updated: {peoples.last_updated.split('T')[0]}</Text>
      <Text>Total Case: {peoples.latest}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
});