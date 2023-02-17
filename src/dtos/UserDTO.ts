export interface UserDTO {
  id: number;
  username: string;
  login: string;
  name: string;
  about: string;
  thumbnail: string;
  photos: {
    id: string;
    photo: string;
  }[]
}