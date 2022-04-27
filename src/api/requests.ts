import axios from './api';

import { users } from '../users';
import { UserType } from '../globalTypes';

export const fetchUserList = async () => {
  try {
    const { data } = await axios.get<UserType[]>(`/users`);

    return data;
    // return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUser = async (id: number) => {
  try {
    const { data } = await axios.get<UserType>(`/users/${id}`);

    return data;
    // return users[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
