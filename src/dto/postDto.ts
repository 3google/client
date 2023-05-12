export interface PostDto {
  id: number;
  title: string;
  author: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
  content: string;
  board_type: string;
}
