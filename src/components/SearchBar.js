import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

const SearchBar = ({ searchDeals }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const inputElement = useRef(null)

  useEffect(() => {
    debouncedSearchDeals(searchTerm)
  }, [searchTerm])

  const searchedDeals = () => {
    searchDeals(searchTerm)
    inputElement.current.blur()
  }

  const debouncedSearchDeals = debounce(searchedDeals, 300)

  return (
    <View>
      <TextInput 
        ref={inputElement}
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