export interface ImageData {
  id: number;
  imageUrl: string;
}
export interface NewImageComment {
  id?: number;
  text: string;
  imageId: number;
}
export interface ImageComment extends NewImageComment {
  id: number;
}
