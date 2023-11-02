import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../service/axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToIncidentDetails = (Id) => {
    console.log(Id);
    // 👇️ navigate to /incidents
    navigate("/IncidentDetails", { state: Id });
  };

  useEffect(() => {
    axiosInstance
      .get(`/Incidents`)
      .then((result) => {
        console.log(result);
        setIncidents(result.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div>
        {incidents.map((incident) => {
          console.log(incident.id);
          return (
            <>
              <div class="row" style={{ marginTop: 10 }} key={incident.id}>
                <div class="col-2"></div>
                <div class="col-8">
                  <div class="card">
                    <div class="card-header">{incident.Status}</div>
                    <div
                      class="card-body"
                      style={{ backgroundColor: "lightblue" }}
                    >
                      <h5 class="card-title">{incident.IncidenType}</h5>
                      <p class="card-text">{incident.IncidentDescription}</p>
                      <p class="card-text">{incident.CreatedOn}</p>
                      <p class="card-text">{incident.ReportedBy}</p>
                      {user.Role === "Admin" && (
                        <button
                          class="btn btn-primary"
                          onClick={() =>
                            navigate(`/IncidentDetails/${incident.id}`)
                          }
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Incidents;
