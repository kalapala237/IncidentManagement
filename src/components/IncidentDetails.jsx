import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import axiosInstance from "../service/axios";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const IncidentDetails = () => {
  const navigate = useNavigate();
  const [incident, setIncidents] = useState({});
  const { parameter } = useParams();
  console.log(parameter);

  const navigateToHome = () => {
    // 👇️ navigate to /Incidents
    navigate("/Incidents");
  };

  useEffect(() => {
    axiosInstance
      .get(`/Incidents?id=${parameter}`)
      .then((result) => {
        console.log(result);
        setIncidents(result.data[0]);
      })
      .catch(() => {});
  }, []);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);
    axiosInstance.put(`/Incidents/${parameter}`, data).then((result) => {
      alert("Incident Updated Successfully");
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
                  value={incident.ReportedBy}
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
                <input
                  type="text"
                  class="form-control"
                  value={incident.IncidenType}
                  aria-label="ReportedBy"
                  aria-describedby="basic-addon1"
                  {...register("IncidenType", {
                    required: {
                      value: true,
                      message: "IncidenType shouldn't be empty",
                    },
                  })}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Incident Description
                </span>
                <input
                  type="text"
                  class="form-control"
                  value={incident.IncidentDescription}
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
                  value={incident.CretedOn}
                  aria-label="CretedOn"
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

export default IncidentDetails;
