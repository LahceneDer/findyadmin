import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import AuthBox from "../../utils/components/AuthBox";
import CustomPrimaryButton from "../../utils/components/buttons/CustomPrimaryButton";
import * as Yup from "yup";
import RedirectInfo from "../../utils/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { RegisterThunk } from "../../store/auth/auth.thunk";
import { useAppDispatch } from "../../store/hooks.state";

type ErrorProp = boolean | undefined;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    // validateOnMount: true,
    validationSchema: Yup.object({
      password: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: async (values: any) => {
      await dispatch(RegisterThunk(values));
      formik.setSubmitting(false);
      navigate(`${routes.LOGIN}`);
    },
  });

  const showUsernameError = (formik.errors.username &&
    formik.touched.username) as ErrorProp;
  const showEmailError = (formik.errors.email &&
    formik.touched.email) as ErrorProp;
  const showPasswdError = (formik.errors.password &&
    formik.touched.password) as ErrorProp;

  const handlePushToRegisterPage = () => {
    navigate(`${routes.LOGIN}`);
  };
  return (
    <AuthBox>
      <Grid container spacing={0}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Username</label>
          <TextField
            id="username"
            name="username"
            type="text"
            sx={{ bgcolor: "white" }}
            onChange={formik.handleChange}
            value={formik.values.username}
            error={showUsernameError}
            helperText={showUsernameError && formik.errors.username}
          />
          <label htmlFor="email">Email Address</label>
          <TextField
            id="email"
            name="email"
            type="email"
            sx={{ bgcolor: "white" }}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={showEmailError}
            helperText={showEmailError && formik.errors.email}
          />
          <label htmlFor="passwd">Password</label>
          <TextField
            id="passwd"
            sx={{ bgcolor: "white" }}
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={showPasswdError}
            helperText={showPasswdError && formik.errors.password}
          />

          <CustomPrimaryButton
            label={formik.isSubmitting ? "Submitting" : "Register"}
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <RedirectInfo
            text="Already have an account?"
            redirectText="Log In"
            redirectHandler={handlePushToRegisterPage}
          />
        </form>
      </Grid>
    </AuthBox>
  );
};

export default Register;
