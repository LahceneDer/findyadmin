import { Grid, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";

import AuthBox from "../../utils/components/AuthBox";
import CustomPrimaryButton from "../../utils/components/buttons/CustomPrimaryButton";
import * as Yup from "yup";
import RedirectInfo from "../../utils/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import { LoginThunk } from "../../store/auth/auth.thunk";
import { useAppDispatch } from "../../store/hooks.state";
import Alert from "@mui/material/Alert";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ErrorProp = boolean | undefined;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      password: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: async (values) => {
      await dispatch(LoginThunk(values.email, values.password, navigate));

      formik.setSubmitting(false);
    },
  });

  const showEmailError = (formik.errors.email &&
    formik.touched.email) as ErrorProp;
  const showPasswdError = (formik.errors.password &&
    formik.touched.password) as ErrorProp;

  const handlePushToRegisterPage = () => {
    navigate(`${routes.REGISTER}`);
  };
  return (
    <>
      <ToastContainer />
      <AuthBox>
        <Grid container textAlign="center">
          <Grid item textAlign="center">
            <Typography variant="h5" sx={{ color: "white" }}>
              Welcome back!
            </Typography>
            <Typography sx={{ color: "white" }}>
              We are happy that you are with us!
            </Typography>
          </Grid>
          <Grid>
            <form onSubmit={formik.handleSubmit}>
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
                label={formik.isSubmitting ? "Submitting" : "Login"}
                disabled={!formik.isValid || formik.isSubmitting}
              />
              <RedirectInfo
                text="Need an account?"
                redirectText="Create an account"
                redirectHandler={handlePushToRegisterPage}
              />
            </form>
          </Grid>
        </Grid>
      </AuthBox>
    </>
  );
};

export default Login;
