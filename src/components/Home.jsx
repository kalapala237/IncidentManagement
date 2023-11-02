import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../service/axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [incidents, setIncidents] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get(`/Incidents?ReportedBy=${user.Email}`)
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
          return (
            <>
              <div class="row" style={{ marginTop: 10 }}>
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

export default Home;
