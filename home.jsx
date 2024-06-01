import React, { useState, useEffect } from 'react'
import "./home.scss"
import axios from "axios";
import {Link} from "react-router-dom";
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from  "react-icons/ai";

const apiKey="319020b7525d7ebffd81ea46615dd43d";
const url="https://api.themoviedb.org/3";
const popular="popular";
const topRated="top_rated";
const nowPlaying="now_playing";
const upcoming="upcoming";
const imgURL ="https://image.tmdb.org/t/p/original";

const Cards=({img})=>{
    return <img className="cards" src={img} />;
}

const Row=({title , arr=[]})=>(
    <div className='row'>
        <h2>{title}</h2>
        <div>
            {
                arr.map((item, index)=>(
                    <Cards key={index} img={`${imgURL}/${item.poster_path}`} /> 
                ))
            }
        </div>
    
    </div>
    );


const Home = () => { 

    const [upcomingM, setUpcoming]= useState([])
    const [nowPlayingM, setNowPlaying]= useState([]);
    const [popularM, setPopular]= useState([]);
    const [topRatedM, setTopRated]= useState([]);
    const [genreM,setGenre]=useState([]);

    useEffect(() => {
  
        const fetchUpcoming = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setUpcoming(results);
        };

        fetchUpcoming();

        const fetchnowPlaying = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            setNowPlaying(results);
        };

        fetchnowPlaying();

        const fetchpopular = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            setPopular(results);
        };

        fetchpopular();

        const fetchtopRated = async()=>{
            const {data : {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            setTopRated(results);
        };

        fetchtopRated();   

        const fetchGenre = async()=>{
            const {data : {genres}, } =await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
            setGenre(genres);
        };

        fetchGenre();


    }, [])

  
  return (
    <section className="home">

        <div className="banner" style={{backgroundImage : nowPlayingM[18] ? `url(${`${imgURL}/${nowPlayingM[18].poster_path}`})` : "rgb(16,16,16)"}}>
       
        {nowPlayingM[18] && <h1>{nowPlayingM[18].original_title}</h1>}
        {nowPlayingM[18] && <p>{nowPlayingM[18].overview}</p>}
       
        <div className='btn'>
            <button>Play <BiPlay/></button>
            <button>My List <AiOutlinePlus/></button>
        </div>
        </div>

        <Row title={"Now Playing"} arr={nowPlayingM}/>
        <Row title={"Upcoming"} arr={upcomingM} />
        <Row title={"Top Rated"}  arr={topRatedM}/>
        <Row title={"Popular"} arr={popularM}/>
      
       
        <div className="genreBox">
        {
                genreM.map((item)=>{
                    <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                })
        }
        </div>

    </section>
  );
};

export default Home;