import { fetchUserList } from '../../../api/requests';
import { UserType } from '../../../globalTypes';

export const getUserList = async (
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const users = await fetchUserList();
    setUsers(users);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
