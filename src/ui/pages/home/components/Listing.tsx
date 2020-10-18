import * as React from 'react';
import { Text, View, Image, Dimensions, Pressable } from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash'

const StyledImage = styled.Image`
max-height: 230px;
`;

const Container = styled.Pressable`
    width: 100%;
    margin: 8px 0px;
    max-height: 230px;
`;

const PriceBulp = styled.View`
    padding: 2px 12px;
    border-radius: 20px;
    background-color: rgba(0,0,0, 0.7);
`;

const PriceBulpContainer = styled.View`
    position: absolute;
    flex: 1;
    align-items: center;
    bottom: 4px;
    height: 24px;
    margin-left: 2%;
`;

const ListingItem = ({ data, navigation, collection }) => {
    const [dimensions,  setDimensions] = React.useState({height: 0, width: 0, margin: 0})
    const setSize = () => {
        Image.getSize(data.source.uri, (width, height) => {
            setDimensions({height: Math.round(((Dimensions.get('window').width) * 0.46) * (height / width)), width: Math.round(((Dimensions.get('window').width) * 0.46)), margin:  Math.round(((Dimensions.get('window').width) * 0.014))})
        })
    }
    React.useEffect(() => {
        setSize()
    }, [])
    return (
        <Container
            onPress={() => navigation.navigate('Listing', { listing: _.find(collection, { id: data.data.id})})}
        >
            <StyledImage 
            style={{ height: dimensions.height, width: dimensions.width, marginLeft: '2%', marginRight: '2%'}}
                resizeMode='cover'
                source={data.source} />
            <PriceBulpContainer style={{width: dimensions.width}}>
                <PriceBulp>
                    <Text style={{color: 'white', position: 'relative', bottom: 0}}>{data.data.price}</Text>
                </PriceBulp>
            </PriceBulpContainer>
        </Container>
    )
}

export default ListingItem
