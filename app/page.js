import Hero from "./components/Hero";
import request from "./utils/request";
import MovieCatSection from "./components/MovieCatSection";
import React from "react";

async function getData() {
  const fetches = [
    request.fetchTrending,
    request.fetchMoviePosters,
    request.fetchTopRated,
    request.fetchActionMovies,
    request.fetchComedyMovies,
    request.fetchHorrorMovies,
    request.fetchRomanceMovies,
    request.fetchDocumentaries,
  ];

  const responses = await Promise.all(fetches.map(fetch));

  const results = {
    Trending: await responses[0].json(),
    MoviePosters: await responses[1].json(),
    TopRated: await responses[2].json(),
    ActionMovies: await responses[3].json(),
    ComedyMovies: await responses[4].json(),
    HorrorMovies: await responses[5].json(),
    RomanceMovies: await responses[6].json(),
    Documentaries: await responses[7].json(),
  };

  return results;
}

export default async function Home() {
  const data = await getData()

  const getRandomMovie = (arr) => {
    const randomMovie = Math.floor(Math.random() * arr.length);
    return arr[randomMovie];
  };
  
  const movie = getRandomMovie(data.MoviePosters.results);

  // console.log('Data : ', data.TopRated)
  return (
    <main>
      <Hero
        MoviePosters={data.MoviePosters}
        movie={movie}
      />
      <MovieCatSection
              Trending={data.Trending}
              TopRated={data.TopRated}
              ActionMovies={data.ActionMovies}
              ComedyMovies={data.ComedyMovies}
              HorrorMovies={data.HorrorMovies}
              RomanceMovies={data.RomanceMovies}
              Documentaries={data.Documentaries}
              movie={movie}
      />
    </main>
  );
}




// async function getData() {

//   const [Trending, MoviePosters, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries] =
//     await Promise.all([
//       (await fetch(request.fetchTrending)).json(),
//       // fetch(request.fetchMoviePosters),
//       // fetch(request.fetchTopRated),
//       // fetch(request.fetchActionMovies),
//       // fetch(request.fetchComedyMovies).
//       // fetch(request.fetchHorrorMovies).
//       // fetch(request.fetchRomanceMovies).
//       // fetch(request.fetchDocumentaries),
//   ])


//   var results = {
//     Trending: Trending.results,
//     // MoviePosters: MoviePosters.json(),
//     // TopRated: TopRated.json(),
//     // ActionMovies: ActionMovies.json(),
//     // ComedyMovies: ComedyMovies.json(),
//     // HorrorMovies: HorrorMovies.json(),
//     // RomanceMovies: RomanceMovies.json(),
//     // Documentaries: Documentaries.json(),
//   }

//   return results
// }