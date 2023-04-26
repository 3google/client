"use client";

export default function Home() {
  return (
    <div className="mainbody-box">
      <div>~ 어쩌구저쩌구 기획 의도, 사이트 소개 등등 ~</div>
      <div>나의 진심이 담긴 글을 작성해 보세요!</div>
      <a href="/write">
        <button className="button">글쓰러가기</button>
      </a>
    </div>
  );
}
