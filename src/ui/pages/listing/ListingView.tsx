import React, { Component }from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper'

const SliderImage = styled.Image`
height: 200px;
width: 100%;
`;

const StyledSwiper = styled(Swiper)`
height: 300px;
`;

const SwiperComponent = ({ images }) => {
    return (
      <StyledSwiper showsButtons={false}>
        {images.map(imageUrl => {
          const url = {uri: imageUrl}
          return (<SliderImage source={url} key={imageUrl}/>)
        })}
      </StyledSwiper>
    )
}


function ListingView({ navigation }) {
  return (
    <View style={{ flex: 1}}>
    <SwiperComponent images={navigation.state.params.listing.images}/>
    </View>
  );
}

ListingView.navigationOptions = {
  headerShown: true,
}

export default ListingView