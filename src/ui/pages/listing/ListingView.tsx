import * as React from 'react';
import { Text, View } from 'react-native';

function ListingView({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{JSON.stringify(navigation.state.params)}</Text>
    </View>
  );
}

ListingView.navigationOptions = {
  headerShown: true,
}

export default ListingView