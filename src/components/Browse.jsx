import { useContext, useEffect, useState } from "react"
import Header from "./Header"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import MainContainer from "./MainContainer"
import SecondaryContiner from "./SecondaryContainer"
// static data
import { NowPlayingMoviesList } from "../utils/constants"

const Browse = ()=>{

    const dispatch = useDispatch();
    const [movies,setMovies] = useState(NowPlayingMoviesList);
    // console.log(movies[0].results)
    
    // const movie = movies[0].results[4] // here we can change the background video

    const [randomIndex, setRandomIndex] = useState(4);

    useEffect(() => {
        // Function to generate a random number between 0 and 17
        const getRandomIndex = () => Math.floor(Math.random() * 26);

        // Set interval to change the randomIndex every 1 minute
        const interval = setInterval(() => {
        setRandomIndex(getRandomIndex());
        }, 31000); // 60000 ms = 1 minute

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Get the movie dynamically based on the randomIndex
    const movie = movies[0].results[randomIndex];


    // const getNowPlayingMovies = async()=>{
    //     const data = await fetch(
    //         'https://api.themoviedb.org/3/movie/now_playing?page=1',
    //         API_OPTIONS
    //     );
    //     const json = await data.json();
    //     // console.log(json.results)
    //     dispatch(addNowPlayingMovies(json.results));
    //     setMovies(json.results);
    // }
    // useEffect(()=>{
    //     getNowPlayingMovies();
    // },[])
    // if(!movies) return;

    return (
        <div>
            <Header/>
            {
                movies &&  <MainContainer movie={movie}/>
            }
            
            <SecondaryContiner/>
            
            {
                /*
                    MainContainer
                        -VideoBackground
                        -VideoTitle
                    SecondaryContiner
                        -MovieList *n
                        -cards*n
                */ 
            }
        </div>
    )
}

export default Browse