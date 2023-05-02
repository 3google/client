import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json([
    {
      id: 1,
      author: '지원',
      title: '[지원]님의 첫번째 처방전 입니다!',
      emotion: '슬픔',
      createdAt: '2023-04-19',
      commentsCnt: '2',
      bookmarksCnt: '3',
    },
    {
      id: 2,
      author: '진희',
      title: '[진희]님의 첫번째 처방전 입니다!',
      emotion: '기쁨',
      createdAt: '2023-04-19',
      commentsCnt: '2',
      bookmarksCnt: '3',
    },
    {
      id: 3,
      author: '냥냥',
      title: '[냥냥]님의 첫번째 처방전 입니다!',
      emotion: '행복',
      createdAt: '2023-04-19',
      commentsCnt: '2',
      bookmarksCnt: '3',
    },
  ]);
}
