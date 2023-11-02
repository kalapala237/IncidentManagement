import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import axiosInstance from "../service/axios";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const RaiseIncidentForm = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigateToHome = () => {
    // 👇️ navigate to /Jobs
    navigate("/Home");
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();

  const submitData = (data) => {
    console.log(data);
    axiosInstance.post("/Incidents", data).then((result) => {
      alert("Incident Submitted Successfully");
      navigateToHome();
    });
  };

  return (
    <>
      <div class="row">
        <div class="col-4"></div>
        <div class="card col-4" style={{ marginTop: 50 }}>
          <div class="card-body">
            <form onSubmit={handleSubmit(submitData)}>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Reported By
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={user.Email}
                  aria-label="ReportedBy"
                  aria-describedby="basic-addon1"
                  {...register("ReportedBy", {
                    required: {
                      value: true,
                      message: "ReportedBy shouldn't be empty",
                    },
                  })}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Incident Type
                </span>
                <select
                  class="form-select"
                  id="selectmethod"
                  defaultValue=""
                  name="IncidenType"
                  {...register("IncidenType", { required: true })}
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Safety">Safety</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Incident Description
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="IncidentDescription"
                  aria-describedby="basic-addon1"
                  {...register("IncidentDescription", {
                    required: {
                      value: true,
                      message: "IncidentDescription shouldn't be empty",
                    },
                  })}
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Creted On
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={new Date().toLocaleString()}
                  aria-label="Line1"
                  aria-describedby="basic-addon1"
                  {...register("CretedOn", {
                    required: {
                      value: true,
                      message: "CretedOn shouldn't be empty",
                    },
                  })}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Status
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={"NEW"}
                  aria-label="Line2"
                  aria-describedby="basic-addon1"
                  {...register("Status", {
                    required: {
                      value: true,
                      message: "Status shouldn't be empty",
                    },
                  })}
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaiseIncidentForm;
