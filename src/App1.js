/* [app1] 함수형useState

import './App.css';
import {useState} from "react";//react 안에 있는 useState를 사용하겠다

function App() { */
  /* const [time, setTime] = useState(1); //time: 변수, setTime: 변하는 값, useState(1): 초기값1
  const clickEvent = () => {
    let newTime;
    if(time >= 12){
      newTime=1;
    }else{
      newTime=time+1;
    }
    setTime(newTime)
  }
  console.log('업데이트~~~') */

 /*  const heavyWork = () => {
    console.log('나는 무거운 작업이야');
    return ['조지현', '고가연']
  }
  const [names, setNames] = useState(()=>{
    return heavyWork(); //콜백함수로 넣기 -> 글자 쓸때마다 렌더링이 계속해서 일어나지 않고 한번만 실행(무거운 작업이 렌더링이 계속 반복되면 웹이 느려짐)
  });
  const [input, setInput] =useState('');

  const inputChange = (e) => {
    setInput(e.target.value);
  }

  const upload = () => {
    setNames((prevState) => {
      //console.log('이전 state', prevState)
      return [input, ...prevState]
    })
  }
  //console.log(input)

  return (
    <div className="form">
      {<span> 현재시각: {time}시</span>
      <button className="btn" onClick={clickEvent}>Update</button>}

      <input type="text" value={input} onChange={inputChange}></input>
      <button className="btn" onClick={upload}>UpLoad</button>
      {
        names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })
      }
    </div>
  );
}

export default App; */

/* [app2]
import './App.css';
import {useEffect, useState} from "react";

function App() {
  //화면 첫 렌더링(Mount), 재 렌더링(upate), 화면에서 사라질때(Unmount)
  //Dependency, clean up
  const [count, setCount] = useState(1);
  const [input, setInput] = useState('');

  const clickUpdate= () => {
    setCount(count+1)
  }
  const inputUpdate= (e) => {
    setInput(e.target.value)
  } */

  /* useEffect(() => {
    console.log('렌더링');
  }) 렌더링이 계속 일어남 */
  
  /* useEffect(() => {
    console.log('렌더링');
  }, []) 시작하자마자, 한 번만 렌더링 */
  
  /* useEffect(() => {
    console.log('렌더링');
  }, [count])


  return (
    <div>
      <button onClick={clickUpdate} className='btn'>Update</button>
      <span >count : {count}</span>
      <input type='text' value={input} onChange={inputUpdate} />
      <span>{input}</span>
    </div>
  );
}

export default App;
*/