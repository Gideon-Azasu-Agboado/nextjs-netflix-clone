'use client'

import { useState } from 'react';
import MovieDetails from './MovieDetails';

const Hero = ({ movie }) => {
  // console.log('MoviePosters ::: ', results)
  
  const [showPlayer, setShowPlayer] = useState(false);
  const [trailer, setTrailer] = useState('');

  
  async function getTrailerData(movie) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`
    );
    const data = await response.json();
  
    const trailerIndex = await data.videos.results.findIndex(
      (element) => element.type === 'Trailer'
    );
  
    const trailerUrl = `https://www.youtube.com/watch?v=${data.videos.results[trailerIndex].key}`;
    return trailerUrl;
  }
  
  async function testGetTrailerData() {
    const trailer = await getTrailerData(movie); 
    setTrailer(trailer)
    // console.log('TRAILER', trailer);
  }
  
  testGetTrailerData();

  return (
    <div>
      <MovieDetails
        movie={movie}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        trailerUrl={trailer}
      />
    </div>
  )
}

export default Hero;