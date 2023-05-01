import { Box1, Box2, Box3, Box4, Mainbox } from './MainBox.styled';

export default function MainBox() {
  return (
    <Mainbox>
      <Box1>
        <div className="box1">
          <img src="/main1.png" />
          <div className="box1-text">
            <div>감정 표현에 인색한 현대사회</div>
            <div>내 마음을 들여다 볼 시간이 없나요? </div>
          </div>
        </div>
      </Box1>
      <Box2>
        <img src="/main2.png" />
        {/* <img src="/main3.png" /> */}
        <div className="box2-text">
          <div>글을 쓰면 나의 감정을 쉽게 마주하고 살펴볼 수 있어요</div>
          <div>글을 쓰는 것만으로 </div>
        </div>
      </Box2>
      <Box3>
        <img src="/main3.png" />
        <div className="box3-text">
          <div> 마음 처방전의 AI가 나의 마음을 분석해서 알맞은 "컨텐츠 서비스"를 처방해 드립니다! </div>
        </div>
      </Box3>
      <Box4>
        <img src="/main4.png" />
        <div className="box4-text">
          <div> 내 처방전을 다른 사람과 공유할 수 있으며 다른 사람들의 처방전도 살펴볼 수 있습니다! </div>
          <div>또 직접 컨텐츠를 추천해 보세요!</div>
        </div>
      </Box4>
    </Mainbox>
  );
}
