import MovieList from './MovieList'
import { NowPlayingMoviesList } from '../utils/constants';

const SecondaryContiner = () =>{
    return (
        <div className=' bg-black text-white  '>   
            <div className='-mt-36 relative z-10'>
                <MovieList title={"Now Playing"} movies={NowPlayingMoviesList}/>
                <MovieList title={"Trending Now"} movies={NowPlayingMoviesList}/>
                <MovieList title={"Now Playing"} movies={NowPlayingMoviesList}/>
                <MovieList title={"Trending Now"} movies={NowPlayingMoviesList}/>
                {
                    //**
                    // MovieList -Popular
                    // MovieList -Now Playing
                    // MovieList -Trending
                    // MovieList -Popular
                    //  */ 
                    // 
                }
            </div>
        </div>
    )
}

export default SecondaryContiner;