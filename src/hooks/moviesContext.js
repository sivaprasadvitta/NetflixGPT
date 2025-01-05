// import { createContext, useState } from "react";
// import { API_OPTIONS } from "../utils/constants"
// import { useDispatch } from "react-redux"
// import { addNowPlayingMovies } from "../utils/moviesSlice"

// const [movieList,setMovieList] = useState([]);

// const getNowPlayingMovies = async () => {
//     const data = await fetch(
//         'https://api.themoviedb.org/3/movie/now_playing?page=1',
//         API_OPTIONS
//     );
//     const json = await data.json();
//     // console.log(json.results)
//     // dispatch(addNowPlayingMovies(json.results));
//     setMovieList(json.results);
// }
// // useEffect(() => {
//     getNowPlayingMovies();
// // }, [])


// const moviesContext = createContext({
//     movies:movieList
// })
// export default moviesContext;

