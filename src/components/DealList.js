import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types'

const DealList = ({ deals }) => {
  return (
    <View style={styles.list}>
      <FlatList 
        data={deals}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 50
  }
})

DealList.prototypes = {
  deals: PropTypes.array.isRequired
}

export default DealList