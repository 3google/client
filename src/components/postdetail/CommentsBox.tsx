import { Text, CommentList } from './postdetail.styled';

export default function CommentsBox() {
  return (
    <Text height={300}>
      <h3>댓글</h3>
      <CommentList>
        <div>댓글 1</div>
        <div>댓글 2</div>
        <div>댓글 3</div>
      </CommentList>
      <input type="text" placeholder="댓글 작성" className="comment-input" />
      <button className="button">댓글 작성</button>
    </Text>
  );
}
