import { SOCIAL_TYPE } from '@common/constants';
export interface UserDto {
  nickname: string;
  profileImg: string;
  social: keyof typeof SOCIAL_TYPE;
  platform: keyof typeof SOCIAL_TYPE;
}
