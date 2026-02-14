import { useFormik } from "formik";
// import { Link, Navigate, Route, Routes } from "react-router";
import { number, object, string } from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

let loginValidationSchema = object({
  name: string().required(),
  poster: string().required(),
  rating: string().required(),
  summary: string().required(),
  trailer: string().required(),
});

export function AddMovie() {
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (data) => {
      console.log("When all validations passes");
      console.log("All data", data);
      fetch('https://6971f5e732c6bacb12c5386f.mockapi.io/movielist',
        {method : "POST" , 
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
      }, 
      )
      .then((res)=>res.json())
      .then((mov)=>console.log(mov))
    },
  });
  return (
    <Box
      className="add-movie"
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Movie-Name"
        variant="outlined"
        type="text"
        placeholder="movie name"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
      />

      <TextField
        label="Poster"
        variant="outlined"
        type="text"
        placeholder="poster-url"
        value={formik.values.poster}
        onChange={formik.handleChange}
        name="poster"
      />
      <TextField
        label="Rating"
        variant="outlined"
        type="text"
        placeholder="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        name="rating"
      />
      <TextField
        label="Summary"
        variant="outlined"
        type="text"
        placeholder="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary"
      />
      <TextField
        label="Trailer"
        variant="outlined"
        type="text"
        placeholder="trailer-url"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        name="trailer"
      />
      <Button type="submit" variant="contained" startIcon={<AddIcon />} >
        Add Movie
      </Button>
    </Box>
  );
}
