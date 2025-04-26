export interface ISignUpAPIPayload {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpAPIResponse {
  message: string;
  user: IUser;
}

export interface ISignInAPIPayload {
  email: string;
  password: string;
}

export interface ISignInAPIResponse {
  message: string;
  user: IUser;
  token: string;
}

export interface IBlog {
  _id: string;
  blogId: string;
  authorId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  _id: string;
  userId: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IGetAllBlogsAPIResponse {
  message: string;
  result: IBlog[];
}
