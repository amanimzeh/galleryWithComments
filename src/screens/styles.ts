import {Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';
//const windowWidth = Dimensions.get('window').width;
//const itemWidth = windowWidth / 3;
const {width} = Dimensions.get('window');
const columnCount = 3;
const itemMargin = 5;
const itemWidth = (width - (columnCount + 1) * itemMargin) / columnCount;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const GridItem = styled.View`
  margin: ${itemMargin / 2}px;
  width: ${itemWidth}px;
  height: ${itemWidth}px; /* Assuming square images */
  align-items: center;
`;

export const ImageItem = styled(Image)`
  flex: 1;
  width: ${itemWidth}px;
  height: 100px;
`;
