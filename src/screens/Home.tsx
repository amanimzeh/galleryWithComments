import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {UseGetAllImage} from '../services/gallery';
import {Container, GridItem, ImageItem} from './styles';
import ModalImage from '../components/Modal';
import {
  getImages,
  setImages,
  addOrUpdate,
  deleteComment,
} from '../redux/imageSlice';
import {useSelector, useDispatch} from 'react-redux';
import {ImageData, NewImageComment} from '../modals/galleryModal';

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [selectedPhoto, setSelectedPhoto] = useState<ImageData | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const {data, isLoading} = UseGetAllImage();

  const renderItem = ({item}: {item: ImageData}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedPhoto(item);
        setModalVisible(true);
      }}>
      <GridItem>
        <ImageItem source={{uri: item.imageUrl}} />
      </GridItem>
    </TouchableOpacity>
  );

  const addOrUpdateComment = (comment: NewImageComment) => {
    dispatch(addOrUpdate(comment));
  };

  const deleteComments = (id: number) => {
    dispatch(deleteComment(id));
  };

  useEffect(() => {
    dispatch(setImages(data || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const imagesDatas = useSelector(getImages);
  if (isLoading) {
    return <Text>loading</Text>;
  }

  return (
    <Container>
      <FlatList
        data={imagesDatas}
        renderItem={renderItem}
        keyExtractor={(item, key) => key.toString()}
        numColumns={3}
        initialNumToRender={10}
        windowSize={5}
        removeClippedSubviews={false}
      />
      <ModalImage
        modalVisible={modalVisible}
        image={selectedPhoto}
        close={() => setModalVisible(false)}
        addOrUpdateComment={(comment: NewImageComment) =>
          addOrUpdateComment(comment)
        }
        deleteComment={(id: number) => deleteComments(id)}
      />
    </Container>
  );
}
export default Home;
