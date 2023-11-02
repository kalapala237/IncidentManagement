import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../service/axios";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submitData = (data) => {
    console.log(data);
    axiosInstance
      .get(`/Users?Email=${data.Email}&Password=${data.password}`)
      .then((result) => {
        console.log(result.data);
        console.log(result.data[0]);
        dispatch({ type: "LOGIN", payload: result.data[0] });
        navigateToJobs();
      })
      .catch(() => {
        alert("Login failed");
        navigateToLogin();
      });
  };

  const navigateToJobs = () => {
    // 👇️ navigate to /contacts
    navigate("/");
  };

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate("/Login");
  };

  const Login = () => {
    alert(email);
    axiosInstance
      .get(`/User?Email=${email}&Password=${password}`)
      .then((result) => {
        console.log(result.data);
        navigateToJobs();
        dispatch({ type: "LOGIN", payload: result.data });
      });
  };

  return (
    <div class="row">
      <div class="col-4"></div>
      <div class="card col-4" style={{ marginTop: 50 }}>
        <div class="card-body">
          <form onSubmit={handleSubmit(submitData)}>
            <div className="mb-3">
              <label for="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(evt) => setEmail(evt.target.value)}
                {...register("Email", {
                  required: "Email shouldn't be empty",
                  minLength: {
                    value: 5,
                    message: "minimal length should be 5 charecters",
                  },
                })}
              ></input>
            </div>
            <div className="mb-3">
              <label for="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(evt) => setPassword(evt.target.value)}
                {...register("password", {
                  required: "password shouldn't be empty",
                  minLength: {
                    value: 5,
                    message: "minimal length should be 5 charecters",
                  },
                })}
              ></input>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
