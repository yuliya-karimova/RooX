import { fetchUserList } from '../../../api/requests';
import { SortTypes, UserType } from '../../../globalTypes';

const getSortedUserList = (userList: UserType[], sortType: SortTypes) => {
  if (sortType === SortTypes.city) {
    return userList.sort(({ address: { city: aName } }, { address: { city: bName } }) => {
      if (aName === bName) {
        return 0;
      }

      return aName < bName ? -1 : 1;
    });
  }

  if (sortType === SortTypes.company) {
    return userList.sort(({ company: { name: aName } }, { company: { name: bName } }) => {
      if (aName === bName) {
        return 0;
      }

      return aName < bName ? -1 : 1;
    });
  }

  return userList;
};

export const getUserList = async (
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  sortType: SortTypes
) => {
  try {
    setIsLoading(true);
    const users = await fetchUserList();
    const sortedUserList = getSortedUserList(users, sortType);
    setUsers(sortedUserList);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
