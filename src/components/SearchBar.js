import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const SearchBar = ({ searchDeals }) => {
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    debouncedSearchDeals(searchTerm)
  }, [searchTerm])

  const debouncedSearchDeals = debounce(searchDeals, 300)

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="Search All Deals"
        onChangeText={setSearchTerm}
        value={searchTerm}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12
  }
})

SearchBar.prototypes = {
  searchDeals: PropTypes.func.isRequired,
}

export default SearchBar