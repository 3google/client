import { usePost } from '@hooks/usePost';
import { Text } from '../../styles/postdetail.styled';

export default function UserText() {
  // const { post } = usePost(id);
  return (
    <Text height={'200px'}>
      <h3>사용자가 쓴 글을 보여주는 부분</h3>
      <div className="text">[예시] 오늘 비가 많이 오는데 실내에서 빗소리를 들으면 기분이 좋다. 좋아하는 노래를 들으며 마라탕을 시켜먹으니 완전 짱이다. 어쩌구 저쩌구~</div>
    </Text>
  );
}
