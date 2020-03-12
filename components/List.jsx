import React from 'react'
import { View } from 'react-native';
import { List, ListItem } from '@ui-kitten/components';

export default function CustomList(props) {
  const { title, peoples } = props

  const renderItem = ({ item }) => (
    <View> 
      {item.latest > 0
      &&
      <ListItem 
      title={`${item.country}, ${item.province || '-'}`}
      description={`${title}: ${item.latest}`}
      />
      }
    </View>
  );

  return (
    <List
      data={peoples.locations}
      renderItem={renderItem}
    />
  )
}