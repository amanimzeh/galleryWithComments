import React from 'react';
import {ButtonStyle} from './styles';
import {Text} from 'react-native';
interface MyComponentProps {
  onPress: () => void;
  children: React.ReactNode;
}
const ModalImage: React.FC<MyComponentProps> = ({onPress, children}) => {
  return (
    <ButtonStyle onPress={onPress}>
      <Text>{children}</Text>
    </ButtonStyle>
  );
};
export default ModalImage;
