import * as React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const Container = styled.View`
    width: 48%;
    margin: 10px 0px;
    max-height: 230px;
`;

const ListingItem = ({ image, price }) => {
    const [aspectRatio,  setAspectRatio] = React.useState(1)
    const setSize = () => {
        Image.getSize(image, (width, height) => {
            setAspectRatio(height / width)
        })
    }
    React.useEffect(() => {
        setSize()
    })
    return (
        <Container 
        style={{ height: ((Dimensions.get('window').width * 0.48) * aspectRatio)}}>
            <StyledImage 
                resizeMode='contain'
                source={{ uri: image}} />
            <Text>{price}</Text>
        </Container>
    )
}

export default ListingItem
