import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import PropTypes from 'prop-types'
import DealItem from './DealItem';

const DealList = ({ deals }) => {
  return (
    <View style={styles.list}>
      <FlatList 
        data={deals}
        renderItem={({item}) => <DealItem deal={item} />}
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