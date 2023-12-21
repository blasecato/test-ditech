export type user = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type list = {
  data: user[];
  total: number;
  page: number;
  limit: number;
};

export type userDetail = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: object;
};
