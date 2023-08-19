import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ rowId, title, fetchURL }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl-4 p-4'>
                {title}
            </h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-gray-400 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                {/* I almost had a brain aneurysm to hide the horizontal scrollbar */}
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar'>
                    {movies.map((item, id) => {
                        return (
                            <Movie item={item} key={id} />
                        );
                    })}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-gray-400 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>
        </>
    )
}

export default Row