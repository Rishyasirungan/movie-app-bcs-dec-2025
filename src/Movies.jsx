import { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movies({ name, poster, rating, summary , deleteMovie , editMovie}) {
  const [printSummary, setSummary] = useState(true);

  return (
    <div className="movie-container">
      <img src={poster} alt="movie-card" className="movie-pic" />
      <div className="content-container">
        <div className="title-container">
          <h3 className="movie-name">{name}</h3>
          <h3 className="movie-rating">⭐ {rating}</h3>
        </div>
        <IconButton
          area-label="ToggleSummary"
          color="primary"
          onClick={() => setSummary(!printSummary)}
        >
        
        {printSummary ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton>
        {!printSummary ? <p className="movie-summary">{summary}</p> : null}
      </div>
      <div className="movie-update">
        {<Counter printProgress={false} />}
        {editMovie}
        {deleteMovie}
      </div>
    </div>
  );
}
