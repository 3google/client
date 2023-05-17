export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const BOARD_TYPE = {
  RECOMMEND: 'RECOMMEND',
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
} as const;

export const SOCIAL_TYPE = {
  KAKAO: 'KAKAO',
  NAVER: 'NAVER',
} as const;
