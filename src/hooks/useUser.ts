import { fetchUser } from '@http/users';
import { useQuery } from '@tanstack/react-query';

async function _fetchUser() {
  try {
    const user = await fetchUser();
    console.log(user);
    return user;
  } catch (error) {
    console.log('로그인 안되는데 .......');
    return null; // undefined 나면 에러ㅡㅡ
  }
}

// component -> state(hook) -> http
export function useUser() {
  const { data: user } = useQuery(['users', 'current'], _fetchUser, {
    retry: 0,
    suspense: true,
    useErrorBoundary: true,
  });

  return { user };
}
