import { UserDto } from './userDto';

export interface ResponseDto<T> {
  data: T;
  statusCode: number;
  message: string;
}

//일단 주석,,
// export type UserResponseDto = ResponseDto<UserDto>;
//
//
// 위에 꺼랑 같음 !
// export interface ResponseDto<UserDto> {
//     data: UserDto;
//     statusCode: number;
//     message: string;
//   }

//

// ResponseDto<UserDto>
// ResponseDto<PostDto>
// ResponseDto<CommentDto>

export interface UserResponseDto {
  data: {
    nickname: string;
    profileImg: string;
  };
  statusCode: number;
  message: string;
}

// export interface PostResponseDto<T> {
//   data: {
//     title: string;
//     okok: string;
//   };
//   statusCode: number;
//   message: string;
// }
// export interface CommentResponseDto<T> {
//   data: {
//     title: string;
//     content: string;
//     author: string;
//   };
//   statusCode: number;
//   message: string;
// }
