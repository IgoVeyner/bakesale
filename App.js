import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import ajax from './src/ajax'
import DealList from './src/components/DealList'
import DealDetail from './src/components/DealDetail';

export default function App() {
  const [deals, setDeals] = useState([])
  const [currentDealId, setCurrentDealId] = useState(null)

  const currentDeal = () => {
    return deals.find(deal => deal.key === currentDealId )
  }

  const setCurrentDeal = (deal) => {
    setCurrentDealId(deal)
  }

  const unsetCurrentDeal = () => {
    setCurrentDealId(null)
  }

  useEffect(() => {
    ajax.fetchInitialDeals().then(fetchedDeals => {
      setDeals(fetchedDeals)
    })
  }, [])
  
  if (currentDealId) {
    return (
      <DealDetail 
        initialDealData={currentDeal()} 
        onBack={unsetCurrentDeal}
      />  
    )
  } 

  if (deals.length > 0) {
    return <DealList deals={deals} onItemPress={setCurrentDeal} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bakesale!</Text>
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
