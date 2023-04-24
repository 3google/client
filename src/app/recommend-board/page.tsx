//더미데이터
const posts = [
  {
    id: 3,
    author: "지원",
    title: "드라이브할 떄 듣기 좋은 노래 추천할게요!",
    emotion: "기쁨",
    createdAt: "2023-04-19",
    comment: "2",
    bookmark: "3",
  },
  {
    id: 4,
    author: "진희",
    title: "우울하고 힘들 때 이런 영화 어떠세요?",
    emotion: "슬픔",
    createdAt: "2023-04-21",
    comment: "5",
    bookmark: "2",
  },
];

export default function RecommendBoard() {
  return (
    <div className="body-box">
      <h3 className="board-title">
        직접 컨텐츠를 추천하는 글을 쓸 수 있어요!
        <button className="button">새 글 쓰기</button>
      </h3>
      {posts.map((posts) => {
        return (
          <div className="posts" key={posts.id}>
            <div>{posts.title}</div>
            <div>{posts.author}</div>
            <div>{posts.emotion}</div>
            <div>💬{posts.comment}</div>
            <div>📌{posts.bookmark}</div>
          </div>
        );
      })}
    </div>
  );
}
