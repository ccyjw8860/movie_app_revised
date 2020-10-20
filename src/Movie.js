import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({year, title, summary, poster, genre}) =>{
    summary = `${summary.slice(0,150)}...`
    genre = genre.join(', ')
    return (
        <div class='movie_container'>
            <div class='blank__box'>
                <img src={poster} alt={title}/>
            </div>
            <div class='movie_info'>
                <span class='title'>{title}({year})</span>
                <span class='genre'>{genre}</span>
                <span class='summary'>{summary}</span>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
}

export default Movie;