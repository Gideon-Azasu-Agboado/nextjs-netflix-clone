'use client'

import React, { useState } from 'react'
import MovieDetails from '../components/MovieDetails'

async function getTrailerData(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`
  );

  const mov = await response.json();

  const trailerIndex = mov.videos.results.findIndex(
    (element) => element.type === 'Trailer'
  );

  const trailerUrl = `https://www.youtube.com/watch?v=${mov.videos.results[trailerIndex].key}`;
  return { trailerUrl, movie: mov };
}

const MovieDetailsPage = async ({ params: { id } }) => {
  const [showPlayer, setShowPlayer] = useState(false);



  const { trailer, movie } = await getTrailerData(id);
  // console.log('MOVIESS ::', trailer)


  return (
    <div className='w-full h-screen bg-teal-950'>
      <MovieDetails
        movie={movie}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        trailerUrl={trailer}
      />
    </div>
  )
}

export default MovieDetailsPage

