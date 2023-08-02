/*
  useReducer : state가 너무 많아지거나 부모와 자식간의 관계가 복잡할 땐 관리를 해서 빠르게 작업할 수 있도록 돕는 Hook

  dispatch : 타입에 이벤트를 발생시키는 역할
  
  dispatch가 reducer를 호출함
  reducer는 store에 가서 현재 state 값을 가져와서 새로운 state를 반환해줌

  dispatch({type:'값'});
  dispatch({type:'값', data:'변경될 값'});
  타입은 string 이다.
*/

import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

export default function Count() {
  //const [상태객체, 디스패치함수] = useReducer(reducer 함수, 초기상태)
  const [number, dispatch] = useReducer(reducer, 0)
  const onPlus = () => {
    dispatch({ type: 'PLUS' });
  }

  const onMinus = () => {
    dispatch({ type: 'MINUS' });
  }

  return (
    <div>
      <h3>{number}</h3>
      <button onClick={onPlus}> + </button>
      <button onClick={onMinus}> - </button>
    </div>
  );
}
