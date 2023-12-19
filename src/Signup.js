import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth, createUserWithEmailAndPassword } from './firebase';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StyledBox = styled(Box)({
  width: "300px",
  margin: "auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  backgroundColor: "#fff",
  textAlign: "center",
  animation: "fadeInDown 0.5s ease-in-out forwards",
  "@keyframes fadeInDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-50px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const Signup = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log('New user created:', userCredential.user);
        navigate('/'); // Redirect to login after successful signup
        toast.success("Created Successful!");
      } catch (error) {
        console.error('Error signing up:', error);
        setFieldError("general", error.message); // Set an error message for display
        toast.error(error.message);
      }
      setSubmitting(false);
    },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}>
      <StyledBox>
        <h2>Signup</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {/* {formik.errors.general && <p style={{ color: "red" }}>{formik.errors.general}</p>} */}
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Creating..." : "Create"}
          </Button>
          <Box pt={2}>
            <Link to="/" style={{ color: "skyblue", textDecoration: "none", fontWeight: "600" }}>Login</Link>
          </Box>
        </form>
      </StyledBox>
    </Box>
  );
};

export default Signup;
