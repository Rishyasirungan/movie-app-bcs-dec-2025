import { useFormik } from "formik";
import { useParams, useNavigate} from "react-router";
import { number, string, object } from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import EditSquareIcon from '@mui/icons-material/EditSquare';

let loginValidationSchema = object({
  name: string().required(),
  poster: string().required(),
  rating : number().required(),
  summary: string().required(),
  trailer: string().required()
});

export function EditedMovie() {
  // fetch(`https://6971f5e732c6bacb12c5386f.mockapi.io/movielist/${data.id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((mv) => getMovies(mv));

  const params = useParams();
  // console.log(params)
  const id = Number(params.id)
  // console.log(id)

  const [editMvData, setEdit]=useState({})

  useEffect(()=>{
  fetch(`https://6971f5e732c6bacb12c5386f.mockapi.io/movielist/${id}`)
  .then(res=>res.json())
  .then((data)=>setEdit(data))
  }, [id])

  console.log(editMvData)
 

  const formik = useFormik({
    initialValues: {
      name: editMvData?.name || "" ,
      poster: editMvData?.poster || "",
      rating: editMvData?.rating || "",
      summary: editMvData?.summary|| "",
      trailer: editMvData?.trailer|| ""
    },
    enableReinitialize: true,
    validationSchema: loginValidationSchema,
    onSubmit: (data) => {
      console.log("When all validations passes");
      console.log("All data", data);
      const editedData = {
        ...data,
        rating : Number(data.rating)
      }
      fetch(`https://6971f5e732c6bacb12c5386f.mockapi.io/movielist/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      })
        .then((res) => res.json())
        .then(() => alert('Update Successfully'));
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
      <h4>Edit-Movie</h4>
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
      <Button type="submit" variant="contained" startIcon={<EditSquareIcon />}>
        Edit Movie
      </Button>
    </Box>
  );
}
