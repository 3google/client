//더미데이터
const posts = [
  {
    id: 1,
    author: "지원",
    title: "지원님의 처방전 입니다!",
    emotion: "슬픔",
    createdAt: "2023-04-19",
    comment: "2",
    bookmark: "3",
  },
  {
    id: 2,
    author: "진희",
    title: "진희님의 처방전 입니다!",
    emotion: "기쁨",
    createdAt: "2023-04-21",
    comment: "5",
    bookmark: "2",
  },
];

export default function PublicBoard() {
  return (
    <div className="body-box">
      <h3 className="board-title">
        나의 처방전을 모두와 함께 보고 다른 사람들의 처방전도 볼 수 있어요!
      </h3>
      {posts.map((post) => {
        return (
          <div className="posts" key={post.id}>
            <div>{post.title}</div>
            <div>💬{post.comment}</div>
            <div>📌{post.bookmark}</div>
          </div>
        );
      })}
    </div>
  );
}
