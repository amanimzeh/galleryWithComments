import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageComment, ImageData, NewImageComment} from '../modals/galleryModal';

interface ImageState {
  images: ImageData[];
  comments: ImageComment[];
}

const initialState: ImageState = {
  images: [],
  comments: [],
};

const ImageSlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageData[]>) => {
      state.images = action.payload;
    },
    setComments: (state, action: PayloadAction<ImageComment[]>) => {
      state.comments = action.payload;
    },
    addOrUpdate: (state, action: PayloadAction<NewImageComment>) => {
      const comment = action.payload;

      if (!comment.id) {
        const lastId = Math.max(
          ...(state.comments.length > 0 ? state.comments.map(c => c.id) : [0]),
        );
        state.comments = [
          ...state.comments,
          {id: lastId + 1, text: comment.text, imageId: comment.imageId},
        ];
      } else {
        state.comments = state.comments.map(com => {
          if (com.id === comment.id) {
            com.text = comment.text;
          }
          return com;
        });
      }
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {setImages, setComments, addOrUpdate, deleteComment} =
  ImageSlice.actions;
export const getImages = (state: {gallery: ImageState}) => state.gallery.images;
export const getCommentByImageId =
  (imageId: number) => (state: {gallery: ImageState}) => {
    return state.gallery.comments.filter(
      comment => comment.imageId === imageId,
    );
  };

export default ImageSlice.reducer;
