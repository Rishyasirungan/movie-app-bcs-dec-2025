import { useFormik } from "formik";


export function EditedMovie (){

        
        fetch(`https://6971f5e732c6bacb12c5386f.mockapi.io/movielist/${data.id}`, 
          {
          method: "PUT",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            "name": "Parasakthi",
            "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/et00431398-kmxrrdfpbu-portrait.jpg",
            "rating": 5,
            "trailer": "https://www.youtube.com/watch?v=parasakthi_trailer",
            "summary": "Set in the 1960s, this period drama starring Sivakarthikeyan focuses on the anti-Hindi imposition agitation in Tamil Nadu, following two brothers on opposite sides of the law during a turbulent political movement."
          })
        })
        .then((res)=>res.json())
        .then((mv) => getMovies(mv));
        
      

  const formik = useFormik({
    initialValues: {
      name: data.name,
      poster: data.poster,
      rating: data.rating,
      summary: data.summary,
      trailer: data.trailer,
    },
    validationSchema: loginValidationSchema,
    onSubmit: (editeddata) => {
      console.log("When all validations passes");
      console.log("All data", editeddata);
      fetch('https://6971f5e732c6bacb12c5386f.mockapi.io/movielist',
        {method : "PUT" , 
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(editeddata)
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
        Edit Movie
      </Button>
    </Box>
  );
  };