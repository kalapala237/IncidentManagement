import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axiosInstance from "../service/axios";
import { useState } from "react";

const Registration = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate("/Home");
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const submitData = (data) => {
    console.log(data);
    let user = {
      Email: data.Email,
      Password: data.Password,
      Role: "User",
    };

    console.log(user);
    axiosInstance
      .post("/Users", user)
      .then((response) => {
        alert("Created Successfully");
        navigateToHome();
      })
      .catch(() => {});
  };

  return (
    <>
      <p>{message}</p>
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
                  {...register("Email", {
                    required: {
                      value: true,
                      message: "Email shouldn't be empty",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/,
                      message: "Invalid email format",
                    },
                    validate: {
                      domainAllowed: (fieldvalue) => {
                        return (
                          fieldvalue.endsWith("htcinc.com") ||
                          "use htcinc domain"
                        );
                      },
                    },
                  })}
                />
                {errors.Email?.type === "required" && (
                  <p className="error">{errors.Email?.message}</p>
                )}
                {errors.Email?.type === "pattern" && (
                  <p className="error">{errors.Email?.message}</p>
                )}
                {errors.Email?.type === "domainAllowed " && (
                  <p className="error">{errors.Email?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  {...register("Password", {
                    required: "password shouldn't be empty",
                    minLength: {
                      value: 5,
                      message: "minimal length should be 5 charecters",
                    },
                  })}
                />
                {errors.Password?.type === "minLength" && (
                  <p className="error">{errors.Password?.message}</p>
                )}
                {errors.Password?.type === "required" && (
                  <p className="error">{errors.Password?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Re-enter Password
                </label>
                <input type="password" className="form-control"></input>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
