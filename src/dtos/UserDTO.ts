export interface UserDTO {
  id: number;
  username: string;
  login: string;
  name: string;
  about: string;
  thumbnail: string;
  public_repos:number;
  company:string;
  location:string;
  avatar_url:string;
  photos: {
    id: string;
    photo: string;
  }[]
}