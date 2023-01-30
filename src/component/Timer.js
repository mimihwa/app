import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log('타이머ing');
        },1000);
        return () => {
            clearInterval(timer);
            console.log('끝!')
        }
    }, []);
    return (
        <div>
            <span>타이머! 콘솔에서 확인</span>
        </div>
    );
};

export default Timer;