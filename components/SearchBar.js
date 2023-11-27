import React from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{ marginHorizontal: 30, marginTop: 10, borderRadius: 20 }}>
      <Searchbar
        style={{alignSelf: 'stretch', borderRadius: 20 }}
        placeholder="Procurar Hábito"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;