import { useMutation, useQuery } from '@tanstack/react-query';
import { updateImgProfile, getUserProfile, fetchUser, updateNickname } from '@http/users';
// React Query를 사용하여 custom hook 생성
interface UpdateProfileVariables {
  profileImg: File;
}

// 프로필 조회
export function useUserProfile() {
  const { data: user } = useQuery(['userProfile'], fetchUser, {});
  return { user };
}

// 프로필 이미지 업데이트
export const useUpdateProfileImg = () => {
  const mutation = useMutation(({ profileImg }: UpdateProfileVariables) => updateImgProfile(profileImg));
  return mutation;
};

// 프로필 닉네임 업데이트
export const useUpdateNickname = () => {
  const mutation = useMutation((nickname: string) => updateNickname(nickname));
  return mutation;
};
