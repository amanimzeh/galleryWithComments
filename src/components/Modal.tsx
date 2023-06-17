/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Dimensions, Text, ListRenderItem, TouchableOpacity} from 'react-native';
import {
  ModalContainer,
  ContentContainer,
  ImageContainer,
  Container,
  EditButton,
  ButtonText,
  ButtonContainer,
  ContentContainerModal,
  CommentInput,
  StyledTextInput,
  AddUpdateButtonContainer,
  StyledTouchableOpacity,
  CloseButtonText,
} from './styles';
import {getCommentByImageId} from '../redux/imageSlice';
import {useSelector} from 'react-redux';
import {StyledFlatList} from './styles';
import ButtonStyle from './button';
import {ImageComment, ImageData, NewImageComment} from '../modals/galleryModal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface MyComponentProps {
  modalVisible: boolean;
  image: ImageData | null;
  close: () => void;
  addOrUpdateComment: (comment: NewImageComment) => void;
  deleteComment: (id: number) => void;
}
const ModalImage: React.FC<MyComponentProps> = ({
  modalVisible,
  image,
  close,
  addOrUpdateComment,
  deleteComment,
}) => {
  if (!image) {
    return null;
  }
  const [comment, setComment] = useState<NewImageComment>({
    text: '',
    imageId: image.id,
  });
  const imageComments = useSelector(getCommentByImageId(image?.id));
  const resetComment = (): void =>
    setComment({
      text: '',
      imageId: image.id,
    });

  const renderItem: ListRenderItem<ImageComment> = ({item}) => (
    <Container>
      <Text>{item.text}</Text>
      <ButtonContainer>
        <EditButton onPress={() => setComment(item)}>
          <ButtonText>Edit</ButtonText>
        </EditButton>
        <TouchableOpacity
          onPress={() => {
            deleteComment(item.id);
            resetComment();
          }}>
          <ButtonText>Delete</ButtonText>
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  );
  return (
    <ModalContainer
      isVisible={modalVisible}
      onBackdropPress={close}
      coverScreen={true}
      deviceWidth={windowWidth}
      deviceHeight={windowHeight}>
      <ContentContainer>
        <StyledTouchableOpacity onPress={close}>
          <CloseButtonText>X</CloseButtonText>
        </StyledTouchableOpacity>

        {image ? (
          <ImageContainer
            source={{uri: image.imageUrl}}
            resizeMode="contain"
            resizeMethod="auto"
          />
        ) : null}
        <ContentContainerModal>
          <CommentInput>
            <StyledTextInput
              onChangeText={text => setComment({...comment, text: text})}
              value={comment.text}
              placeholder="Write your comments"
            />
          </CommentInput>
          <AddUpdateButtonContainer>
            <ButtonStyle
              onPress={() => {
                if (comment.text !== '') {
                  addOrUpdateComment(comment);
                  resetComment();
                }
              }}>
              <Text>{comment.id ? 'update comment' : 'add comment'}</Text>
            </ButtonStyle>
            <ButtonStyle onPress={resetComment}>
              <Text>reset comment</Text>
            </ButtonStyle>
          </AddUpdateButtonContainer>
          <StyledFlatList
            data={imageComments}
            renderItem={renderItem}
            keyExtractor={(item: ImageComment, index: number) =>
              index.toString()
            }
          />
        </ContentContainerModal>
      </ContentContainer>
    </ModalContainer>
  );
};
export default ModalImage;
