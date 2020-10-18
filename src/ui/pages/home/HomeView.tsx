import * as React from 'react';
import styled from 'styled-components/native';
import { Text, FlatList, View, ScrollView, SafeAreaView } from 'react-native';
import listingList from '../../../mocks/listing/listingMocks';
import ListingItem from './components/Listing';
import MasonryList from "react-native-masonry-list";

const SafeAreaContainer = styled.SafeAreaView`
  flex:1;
`

function HomeView({ navigation }) {
  return (
    <SafeAreaContainer>
      <MasonryList
        images={listingList.map(item=>{
          return {id: item.id, url: item.images[0], price: item.price}
        })}
        sorted={true}
        completeCustomComponent={(data) => <ListingItem data={data} navigation={navigation} collection={listingList}/>}
      />
    </SafeAreaContainer>
  );
}

export default HomeView