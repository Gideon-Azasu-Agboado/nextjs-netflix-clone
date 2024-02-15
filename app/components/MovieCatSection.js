import React from "react";
import Row from "./row";
import Image from 'next/image';

const MovieCatSection = ({
    Trending,
    TopRated,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
    movie
}) => {
    return (
        <div>
            <div className="relative">
                <div className='relative top-[-30px] left-0 w-screen -z-10 h-screen blur-2xl'>
                    <Image
                        fill
                        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}`}
                        className='object-cover'
                        alt='movie poster'
                    />
                </div>
            </div>
            <section className="absolute top-[100vh] left-0 pb-32 pt-32 w-full px-[10%] justify-center bg-gradient-to-b from-teal-950/80 from-3% to-[#000103] to-20%">
                <h3 className="text-slate-300/90 font-semibold text-2xl text-center pb-[40px]">
                    Browse Through Our Categories And Discover More Movies...
                </h3>
                <Row title="Trending Now" movies={Trending} />
                <Row title="Top Rated" movies={TopRated} />
                <Row title="Action Thriller" movies={ActionMovies} />
                <Row title="Comedies" movies={ComedyMovies} />
                <Row title="Horror" movies={HorrorMovies} />
                <Row title="Romance" movies={RomanceMovies} />
                <Row title="Documentaries" movies={Documentaries} />
            </section>
        </div>
    )
}

export default MovieCatSection;