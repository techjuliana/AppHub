export interface UserDTO {
  id: string;
  username: string;
  name: string;
  about: string;
  thumbnail: string;
  // accessories: {
  //     id: string;
  //     type: string;
  //     name: string;
  //   }[];
  photos: {
    id: string;
    photo: string;
  }[]
}