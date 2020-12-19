import React,{ useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './Row.css';
import movieTrailer from "movie-trailer";

const image_url = "https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailer]=useState("");
    useEffect(()=>{
        async function fetchData(){
            const resp = await fetch("https://api.themoviedb.org/3"+fetchUrl);
            const respData = await resp.json();
            setMovies(respData.results);
            return respData;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
     
      const handleClick = (movie) => {
          if(trailerUrl){
              setTrailer('');
          }
          else{
              movieTrailer(movie?.original_title || movie?.title || movie?.name || "").then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailer(urlParams.get("v"));
              }).catch(error => console.log(error));
          }
      }

    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row_posters">
                {movies.map(movie => (
                    
                    <img key={movie.id} className = {`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${image_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} onClick = {() => handleClick(movie)}/>
                ))}
            </div>
            <div class="youtube">
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </div>
    )
}

export default Row
