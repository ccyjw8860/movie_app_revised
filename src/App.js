import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import './index.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
}

getMovies = async() =>{
    const {
        data: {
            data:{movies}
        }
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false})
}

componentDidMount(){
   this.getMovies();

}

render(){
    const { isLoading, movies } = this.state
    return(
        <section className='container'>
            {isLoading ? (
              <div className='loader'>
                <span className='loader__text'>Loading...</span>
              </div>
            ):(
              <div className='movies'>
                {movies.map(movie=>{
                  return <Movie 
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  genre={movie.genres}
                  poster={movie.medium_cover_image}/>
                })}
              </div>
              
            )}
        </section>
    );
}
}
export default App;
