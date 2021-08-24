import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types'
import { useState } from 'react'

import { priceDisplay } from '../util'

const DealDetail = ({ initialDealData }) => {
  const [deal, setDeal] = useState(initialDealData)

  return (
    <View style={styles.deal}>
      <Image 
        source={{ uri: deal.media[0] }} 
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{deal.title}</Text>
        <View style={styles.footer}>
          <Text style={styles.cause}>{deal.cause.name}</Text>
          <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
  },
  
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc'
  },

  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: '1',
    borderTopWidth: '0',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  footer: {
    flexDirection: 'row',
  },

  cause: {
    flex: 2,
  },

  price: {
    flex: 1,
    textAlign: 'right',
  },
})

DealDetail.prototypes = {
  initialDealData: PropTypes.object.isRequired
}

export default DealDetail