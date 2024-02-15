'use client'

import React, { useRef } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import Thumbnail from './Thumbnail';

const Row = ({ title, movies: { results: moviesCats } }) => {
    // console.log('ROWMOVIES::', movies)
    const rowRef = useRef(null)

    const arrowButtonClick = (direction) => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    arrowButtonClick()

    return (
        <div className='space-y-0.5 pb-10 sm:pb-0'>
            <h2 className='w-56 pt-10 text-2xl font-semibold text-orange-400 transition duration-200 hover:text-white cursor-pointer pb-0'>
                {title}
            </h2>

            <div className='group relative'>
                <BiChevronLeft
                    className="absolute top-[24px] bottom-0 left-2 z-40 m-auto cursor-pointer transition opacity-0 hover:scale-125 group-hover:opacity-100"
                    size={50}
                    color='#ffffff'
                    onClick={() => arrowButtonClick('left')}
                />

                <div
                    className='flex items-center space-x-4 overflow-x-scroll scrollbar-hide -mt-top:10 sm:top-0'
                    ref={rowRef}
                >
                    {moviesCats.map((movieCat) => <Thumbnail key={movieCat.id} movie={movieCat} />)}
                </div>

                <BiChevronRight
                    className="absolute top-[110px] bottom-0 right-2 z-40 m-auto cursor-pointer transition opacity-0 hover:scale-125 group-hover:opacity-100"
                    size={50}
                    color='#ffffff'
                    onClick={() => arrowButtonClick('right')}
                />
            </div>

        </div>
    )
}

export default Row;