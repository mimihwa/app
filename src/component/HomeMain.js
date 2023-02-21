import React from 'react';

const HomeMain = (props) => {
    return (
        <div>
            <div className='bg'>
                <div className='blackBg'>
                    <span>MOVIE WORLD</span>
                </div>
            </div>
            <section id="section1">
               <div className='container'>
                    <span className="chart">무비차트</span>
                    <div className="chartWrap">
                       <a href='http://www.cgv.co.kr/movies/detail-view/?midx=86829' className="box box1">
                            <div className="number">1</div>
                            <div className="title">아임 히어로</div>
                       </a>
                       <a href='http://www.cgv.co.kr/movies/detail-view/?midx=86796' className="box box2">
                            <div className="number">2</div>
                            <div className="title">앤트맨과 와스프</div>
                       </a>
                       <a href='http://www.cgv.co.kr/movies/detail-view/?midx=86826' className="box box3">
                            <div className="number">3</div>
                            <div className="title">귀멸의 칼날</div>
                       </a>
                       <a href='http://www.cgv.co.kr/movies/detail-view/?midx=86772' className="box box4">
                            <div className="number">4</div>
                            <div className="title">마루이 비디오</div>
                       </a>
                       <a href='http://www.cgv.co.kr/movies/detail-view/?midx=86798' className="box box5">
                            <div className="number">5</div>
                            <div className="title">카운트</div>
                       </a>
                    </div>
               </div>
            </section>
        </div>

    );
};

export default HomeMain;