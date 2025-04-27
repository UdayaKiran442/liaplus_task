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
  authorId: IUser;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  _id: string;
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

export interface IAddBlogAPIPayload {
  title: string;
  content: string;
}

export interface IAddBlogAPIResponse {
  message: string;
  blog: IBlog;
}
  