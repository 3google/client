import { useMutation, useQuery } from '@tanstack/react-query';
import { updateProfile, fetchUser } from '@http/users';

// React Query를 사용하여 custom hook 생성

// WAIT 1-프로필 업데이트
interface UpdateProfileVariables {
  nickname: string;
  profileImg: File;
  social: string;
}

// 입력받은 nickname과 profileImg를 가지고 updateProfile 함수를 호출
export const useUpdateProfile = () => {
  const mutation = useMutation(({ nickname, profileImg }: UpdateProfileVariables) =>
    updateProfile(nickname, profileImg),
  );
  return mutation;
};

// 카카오, 네이버 구분 이미지
export const useUserSocial = () => {
  const query = useQuery(['userProfile'], fetchUser);
  return query;
};
