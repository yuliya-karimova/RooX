import axios from './api';

import { UserType } from '../globalTypes';

export const fetchUserList = async () => {
  try {
    const { data } = await axios.get<UserType[]>(`/users`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUser = async (id: number) => {
  try {
    const { data } = await axios.get<UserType>(`/users/${id}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
