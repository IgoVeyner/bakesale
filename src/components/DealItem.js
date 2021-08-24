import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types'

import { priceDisplay } from '../util'

const DealItem = ({ deal }) => {
  return (
    <View>
      <Image 
        source={{ uri: deal.media[0] }} 
        style={styles.image}
      />
      <View>
        <Text>{deal.title}</Text>
        <Text>{priceDisplay(deal.price)}</Text>
        <Text>{deal.cause.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150
  },
})

DealItem.prototypes = {
  deal: PropTypes.object.isRequired
}

export default DealItem