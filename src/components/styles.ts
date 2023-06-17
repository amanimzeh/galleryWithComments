import {FlatList, Image, View} from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {ImageComment} from '../modals/galleryModal';
export const ModalContainer = styled(Modal)``;

export const ContentContainer = styled(View)`
  flex: 1;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  aspect-ratio: 1;
`;

export const Container = styled.View`
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  padding: 10px;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditButton = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
`;

export const ButtonText = styled.Text`
  color: blue;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const ContentContainerModal = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const CommentInput = styled.View`
  border-color: #cecece;
  border-width: 1px;
  border-radius: 10px;
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  padding: 10px;
`;

export const AddUpdateButtonContainer = styled.View`
  flex-direction: row;
`;

export const ButtonStyle = styled.TouchableOpacity`
  width: 40%;
  background-color: #6495ed;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const StyledFlatList = styled(FlatList).attrs<ImageComment>({
  contentContainerStyle: {
    justifyContent: 'center',
  },
})`
  width: 90%;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 0.1;
  width: 100%;
  padding: 5px;
  margin: 5px;
`;

export const CloseButtonText = styled.Text`
  text-align: right;
  font-weight: bold;
`;
