
import './App.css';
import { useRef, useState } from "react";

function App() {

    const countRef=useRef(0); //current 값을 보여줌, 렌더링을 시키지 않고 동작이 필요할때 사용
    console.log(countRef);
    const [count, setCount] = useState(0);
    console.log('렌더링');

    const increaseCountState = () => {
      setCount(count+1)
    }
    const increaseCountRef = () => {
      countRef.current = countRef.current+1
    }
    return(
      <div>
        <p className='state'> State: {count}</p>
        <p className='state'>Ref: {countRef.current}</p>
        <button className='btn' onClick={increaseCountState}>State up</button>
        <button className='btn' onClick={increaseCountRef}>Ref up</button>
      </div>
    )
}

export default App;

