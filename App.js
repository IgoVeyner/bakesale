import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import ajax from './src/ajax'
import DealList from './src/components/DealList'

export default function App() {
  const [deals, setDeals] = useState([])

  useEffect(() => {
    ajax.fetchInitialDeals().then(fetchedDeals => {
      setDeals(fetchedDeals)
    })
  }, [])
  
  return (
    <View style={styles.container}>
      {
        deals.length > 0 ? (
          <DealList deals={deals} />
        ) : (
          <Text style={styles.header}>Bakesale!</Text>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 40
  }
});
