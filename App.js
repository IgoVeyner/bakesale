import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import ajax from './src/ajax'
import DealList from './src/components/DealList'
import DealDetail from './src/components/DealDetail';
import SearchBar from './src/components/SearchBar';

export default function App() {
  const [deals, setDeals] = useState([])
  const [currentDealId, setCurrentDealId] = useState(null)
  const [dealsFromSearch, setDealsFromSearch] = useState([])
  const dealsToDisplay = dealsFromSearch.length > 0 ? dealsFromSearch : deals

  const searchDeals = (searchTerm = []) => {
    if (searchTerm) {
      ajax.fetchDealsSearchResults(searchTerm).then(searchResults => {
        setDealsFromSearch(searchResults)
      })
    } else {
      setDealsFromSearch(searchTerm)
    }
  }

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
      <View style={styles.main}>
        <DealDetail 
          initialDealData={currentDeal()} 
          onBack={unsetCurrentDeal}
        />  
      </View>
    )
  } 

  if (dealsToDisplay.length > 0) {
    return (
      <View style={styles.main}>
        <SearchBar searchDeals={searchDeals} />
        <DealList deals={dealsToDisplay} onItemPress={setCurrentDeal} />
      </View>
    ) 
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
  },

  main: {
    marginTop: 30,
  },
});
