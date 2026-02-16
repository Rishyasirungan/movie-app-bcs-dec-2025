import { BrowserRouter, Routes, Route, data } from "react-router";
import { useEffect, useState } from "react";
import { Movies } from "./movies";
import { IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { useNavigate } from "react-router";
import { EditedMovie } from "./Editmovie";



export function MovieList() {
  // const movieDetails = [
  //   {
  //     id: 1,
  //     name: "Border 2",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-yvzgkbpdca-portrait.jpg",
  //     rating: 7.5,
  //     summary:
  //       "A massive war drama sequel set during the 1971 Indo-Pak war. Sunny Deol returns as Major Kuldip Singh Chandpuri to lead a new battalion in a high-stakes battle for sovereignty, featuring intense tank warfare and patriotic sacrifice.",
  //   },
  //   {
  //     id: 2,
  //     name: "Thalaivar Thambi Thalaimaiyil",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00481251-htxqsrdcwb-portrait.jpg",
  //     rating: 8.8,
  //     summary:
  //       "A chaotic comedy-drama starring Jiiva as a Panchayat President who gets trapped in a dilemma when a death occurs in one house and a wedding in the neighbor's house simultaneously, forcing him to manage the mayhem.",
  //   },
  //   {
  //     id: 3,
  //     name: "Dhurandhar",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00452447-smmrnuhqrx-portrait.jpg",
  //     rating: 7.0,
  //     summary:
  //       "An espionage thriller featuring Ranveer Singh as Hamza, an undercover Indian intelligence agent who embeds himself deep within the Karachi mafia to dismantle terror operations from the inside.",
  //   },
  //   {
  //     id: 4,
  //     name: "Hot Spot 2 Much",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00482307-akyreartuz-portrait.jpg",
  //     rating: 7.2,
  //     summary:
  //       "A bold anthology sequel that satirizes modern morality. The film weaves together stories about relationships, hypocrisy, and social stigmas, centered around a filmmaker pitching controversial scripts to a producer.",
  //   },
  //   {
  //     id: 5,
  //     name: "Ikkis",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00388415-lxshcwaazn-portrait.jpg",
  //     rating: 8.7,
  //     summary:
  //       "A biographical war drama directed by Sriram Raghavan, telling the untold story of Second Lieutenant Arun Khetarpal, the youngest recipient of the Param Vir Chakra, who fought bravely in the 1971 war.",
  //   },
  //   {
  //     id: 6,
  //     name: "Draupathi 2",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00481466-fkumcpefau-portrait.jpg",
  //     rating: 6.5,
  //     summary:
  //       "A social drama that shifts between the modern day and the 14th century. It follows a man entangled in a land dispute who discovers a historical connection to a Hoysala commander protecting his kingdom from invaders.",
  //   },
  //   {
  //     id: 7,
  //     name: "Rahu Ketu",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00462933-qmcbleflrx-portrait.jpg",
  //     rating: 8.0,
  //     summary:
  //       "A fantasy comedy where two unlucky characters from a writer's story, Rahu and Ketu (played by Varun Sharma and Pulkit Samrat), magically come to life and create cosmic chaos in the real world.",
  //   },
  //   {
  //     id: 8,
  //     name: "Parasakthi",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00431398-kmxrrdfpbu-portrait.jpg",
  //     rating: 5.0,
  //     summary:
  //       "Set in the 1960s, this period drama starring Sivakarthikeyan focuses on the anti-Hindi imposition agitation in Tamil Nadu, following two brothers on opposite sides of the law during a turbulent political movement.",
  //   },
  //   {
  //     id: 9,
  //     name: "Happy Patel: Khatarnak Jasoos",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00473816-brzspuhzaq-portrait.jpg",
  //     rating: 6.0,
  //     summary:
  //       "A spy-comedy featuring Vir Das as Happy Patel, a ballet-dancing, sandwich-making misfit who is unexpectedly tasked with rescuing a scientist and saving the world from a deadly fairness cream conspiracy.",
  //   },
  //   {
  //     id: 10,
  //     name: "Jockey",
  //     poster:
  //       "https://assets-in.bmscdn.com/discovery-catalog/events/et00464571-brzspuhzaq-portrait.jpg",
  //     rating: 7.8,
  //     summary:
  //       "An intense sports drama that dives into the high-stakes world of horse racing. The film explores the physical and emotional challenges faced by a professional jockey fighting for pride and survival in the sport.",
  //   },
  // ];

  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("https://6971f5e732c6bacb12c5386f.mockapi.io/movielist" , {method: "GET"})
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  }
  useEffect(() => {
    getMovies();
  }, []);


    
  

  const deleteMovie = (data) => {
    fetch(`https://6971f5e732c6bacb12c5386f.mockapi.io/movielist/${data.id}`, 
      {
      method: "DELETE",
    }).then(() => getMovies());
  };

  const navigate = useNavigate();

  return (
    <section className="movie-list-container">
      {movies.map((data) => (
        
        <Movies
          name={data.name}
          poster={data.poster}
          rating={data.rating}
          summary={data.summary}
          deleteMovie={
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => deleteMovie(data)}
            >
              <DeleteIcon/>
            </IconButton>
          }
          editMovie = {
            <IconButton
            aria-label="edit"
            color="primary"
            onClick={()=>navigate(`/movielist/editmovie/${data.id}`)}
            >
              <MovieEditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}




