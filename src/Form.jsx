import { useFormik } from "formik";

import { object, string } from "yup";

// Plan
let loginValidationSchema = object({
  username: string().required(),
  password: string().required()
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      username: "tara 1",
      password: "abc",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (data) => {
      console.log("When all validations passes");
      console.log("All data", data);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        name="username"
      />
      <input
        type="text"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}