import React, { useState, useEffect } from 'react'
import axios from './axios';
import YouTube from 'react-youtube';
import './RowDiv.css'
import movieTrailer from 'movie-trailer';
const base_url = 'https://image.tmdb.org/t/p/original/';
function RowDiv(props) {
    const [movies, setMovies] = useState([])
    const [trailerurl, setTrailerurl] = useState('')
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [props.fetchURL])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick=(movie)=>{
       if(trailerurl){
        setTrailerurl('');
       }else {
        movieTrailer(movie?.name || '')
        .then((url )=>{ 
            //https://www.youtube.com/watch?v=NJ7Wrah46Aw
         const  urlParams= new URLSearchParams (new URL(url).search);
         setTrailerurl(urlParams.get('v'))
           //setTrailerURL(urlParams.get('v'));
             }).catch((error)=>alert(error))
}
      }
    return (
        <div className="row__div">
            <h2>{props.title} </h2>
            <div className='row__posters'>
                {/* {row__posters} */}
                {movies.map(movie => (
                    <img
                    onClick={()=>handleClick(movie)}
                    key={movie.id}
                    src={`${base_url}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`}
                    className={`row__poster ${props.isLargeRow && 'row__posterLarge'}`}
                    //"row__poster"
                    alt={movie.name} />
                )
                )}
            </div>
           {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
        </div>
    )
}

export default RowDiv
