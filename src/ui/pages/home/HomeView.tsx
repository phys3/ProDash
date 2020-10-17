import * as React from 'react';
import styled from 'styled-components/native';
import { Text, FlatList, View, ScrollView, SafeAreaView } from 'react-native';
import listingList from '../../../mocks/listing/listingMocks';
import ListingItem from './components/Listing';

const SafeAreaContainer = styled.SafeAreaView`
  flex:1;
  margin-left: 10px;
  margin-right: 10px;
`
const StyledFlatList = styled.FlatList`
`;
let numColumns=2;
function HomeView() {
  const renderItem = ({ item }) => (
    <ListingItem image={item.images[0]} price={item.price}/>
  )
  return (
    <SafeAreaContainer>
      <StyledFlatList
        data={listingList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        columnWrapperStyle={{flex:1, justifyContent: "space-between"}}
      />
    </SafeAreaContainer>
  );
}

export default HomeView