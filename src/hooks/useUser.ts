import { useState, useEffect } from 'react';
import { fetchUser } from '../http/users';
import { useQuery } from '@tanstack/react-query';

// component -> state -> http
export function useUser() {
  const { data: user, isLoading, error } = useQuery(['users', 'current'], fetchUser);
  //   useState()
  //   useEffect()

  return { user, isLoading, error };
}

// queriesMap = {
//     `["users", "current"]`: {email:'a@qa.a',name:'a'},

// }

// react query에서 데이터를 KEY 단위로 캐싱, KEY는 배열만 사용 가능

// react query의 캐싱은 JS의 객체에 됨 -> 새로고침 시 모두 삭제
// rqCache = {}
//
// 만약 react-query를 사용해서 아래 주소로 요청을 보내서 데이터를 가져왔다면
// useQuery(["users", "current"], () => axios.get("/api/users"));
//
// rqCache = { `["users", "current"]`: 유저 데이터  }
// 위와 같이 저장이 됨
//
// hook마다 보통 key가 다르기 때문에
// 같은 hook으로 요청을 또 보내면, 덮어 씌워짐
// 이전 데이터는 삭제되고, 새로운 데이터로 덮어 씀
