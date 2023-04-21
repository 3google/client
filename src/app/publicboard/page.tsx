export default function Home() {
  //더미데이터
  let posts = [
    {
      author: "지원",
      title: "지원님의 처방전 입니다!",
      emotion: "슬픔",
      createdAt: "2023-04-19",
      comment: "2",
      bookmark: "3",
    },
    {
      author: "진희",
      title: "진희님의 처방전 입니다!",
      emotion: "기쁨",
      createdAt: "2023-04-21",
      comment: "5",
      bookmark: "2",
    },
  ];

  return (
    <div className="body-box">
      <h3 className="board-title">
        나의 처방전을 모두와 함께 보고 다른 사람들의 처방전도 볼 수 있어요!
      </h3>
      {posts.map((posts, index) => {
        return (
          <div className="posts" key={index}>
            <div>{posts.title}</div>
            <div>💬{posts.comment}</div>
            <div>📌{posts.bookmark}</div>
          </div>
        );
      })}
    </div>
  );
}
