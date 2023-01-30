
import './App.css';
import React, { useState } from "react";
import Movie from "./component/Movie";

function App() {
    const [movieTitle, setMovieTitle]= useState('');
    const [movieYear, setMovieYear]= useState('');
    const [movies, setMovies]= useState([
      {title: '아바타', year: 2023},
      {title: '쥬라기 월드', year: 2022},
      {title: '닥터 스트레인지', year: 2022},
    ]);
    const renderMovies= movies.map((movie) => {
        return(
          <Movie movie={movie} key={movie.title}/>
        )
    })
    const onSubmit= (e) => {
      e.preventDefault();
      setMovies([
          ...movies,
              {
                title:movieTitle,
                year:movieYear
              }
          ]);
          setMovieTitle('');
          setMovieYear('');
    }
    return(
      <div className='App'>
          <h1>영화 list</h1>
          <form action='#' onSubmit={onSubmit}>
              <input type='text' placeholder='영화제목을 쓰세요' value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}} />
              <input type='text' placeholder='개봉연도를 쓰세요' value={movieYear} onChange={(e) => {setMovieYear(e.target.value)}}/>
              <button type='submit'>ADD</button>
          </form>
          {renderMovies}
      </div>
    )
}

export default App;

