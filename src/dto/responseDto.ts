import { PostDto } from './postDto';
import { UserDto } from './userDto';

export interface ResponseDto<T> {
  data: T;
  statusCode: number;
  message: string;
}

export type UserResponseDto = ResponseDto<UserDto>;
export type PostResponseDto = ResponseDto<PostDto>;

// 위에 꺼랑 같음 !
// export interface ResponseDto<UserDto> {
//     data: UserDto;
//     statusCode: number;
//     message: string;
//   }

//=================================================
// 위에 다 오류나면 일단 이런식으로!
// export interface UserResponseDto {
//   data: {
//     nickname: string;
//     profileImg: string;
//   };
//   statusCode: number;
//   message: string;
// }
