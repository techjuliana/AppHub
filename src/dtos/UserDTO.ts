export interface UserDTO {
  id: number;
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