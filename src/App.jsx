import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { data, Link, Navigate, Route, Routes } from "react-router";
import "./index.css";
import { MovieList } from "./Movielist";
import { UserList } from "./UserList";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ListIcon from '@mui/icons-material/List';
import { BasicForm } from "./Form";
import { AddMovie } from "./Addmovie";
import {EditedMovie} from "./Editmovie"



function App() {
  return (
    <>
      <nav>
    <Stack direction="row" spacing={2}>
      <Button variant="" startIcon={<ListIcon />}>
        <Link to="/movielist">MovieList</Link>
      </Button>
      <Button variant="" startIcon={<ListIcon />}>
        <Link to="/userlist">UserList</Link>
      </Button>
      <Button variant="" startIcon={<ListIcon />}>
        <Link to="/addmovie">AddMovie</Link>
      </Button>
    </Stack>
        {/* <li>
          <Link to="/movielist">MovieList</Link>
        </li> */}
        {/* <li>
          <Link to="/userlist">UserList</Link>
        </li> */}
      </nav>
      <Routes>
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/movielist/editmovie/:id" element={<EditedMovie />} />
      </Routes>
    </>
  );
}

export default App;


