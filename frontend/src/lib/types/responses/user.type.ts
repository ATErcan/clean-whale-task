export interface User {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ILoginResponse {
  jwt?: {
    token: string;
  };
  user?: User;
  error?: string;
}