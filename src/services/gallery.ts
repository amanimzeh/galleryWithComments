import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ImageData} from '../modals/galleryModal';
import {IMAGES} from '../utils/ImagesMockData';

const getImagesList = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(IMAGES);
    }, 1000),
  );
};
export const UseGetAllImage = (): UseQueryResult<ImageData[], Error> => {
  return useQuery(['allImages'], getImagesList);
};
