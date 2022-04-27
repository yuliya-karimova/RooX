import { fetchUser } from '../../../api/requests';
import { UserType } from '../../../globalTypes';

export const getUser = async (
  setUserInfo: React.Dispatch<React.SetStateAction<UserType | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const userInfo = await fetchUser();
    setUserInfo(userInfo);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
