export interface PostDto {
  id: number;
  title: string;
  content: string;
  author: string;
  board_type: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
}
