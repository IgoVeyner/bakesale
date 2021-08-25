import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import ajax from '../ajax';

import { priceDisplay } from '../util'

const DealDetail = ({ initialDealData, onBack }) => {
  const [deal, setDeal] = useState(initialDealData)

  useEffect(() => {
    ajax.fetchDealDetail(deal.key).then(fullDeal => {
      setDeal(fullDeal)
    })
  }, [])

  return (
    <View style={styles.deal}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.backLink}>Back</Text>
      </TouchableOpacity>

      <Image 
        source={{ uri: deal.media[0] }} 
        style={styles.image}
      />

      <View style={styles.detail}>
        <View>
          <Text style={styles.title}>{deal.title}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.info}>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
            <Text style={styles.cause}>{deal.cause.name}</Text>
          </View>
        
          {deal.user && (
            <View style={styles.user}>
              <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
              <Text>{deal.user.name}</Text>
            </View>
          )}
        
        </View>
      </View>

      <View style={styles.description}>
        <Text>{deal.description}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
  },

  detail: {
    borderColor: '#bbb',
    borderWidth: 1,
  },

  backLink: {
    marginBottom: 5,
    color: '#22f',
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
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },

  info: {
    alignContent: 'center',
  },

  user: {
    alignItems: 'center',
  },

  cause: {
    marginVertical: 10,
  },

  price: {
    fontWeight: 'bold',
  },

  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },

  description: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dotted',
    margin: 10,
    padding: 10,
  }
})

DealDetail.prototypes = {
  initialDealData: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default DealDetail