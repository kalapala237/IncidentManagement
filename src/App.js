import { Route, Routes } from "react-router-dom";
import Navbar from "./components/AppNavBar";
import AppNavbar from "./components/AppNavBar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import RaiseIncidentForm from "./components/RaiseIncidentForm";
import Home from "./components/Home";
import Incidents from "./components/Incidents";
import IncidentDetails from "./components/IncidentDetails";

function App() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="//RaiseIncident"
          element={
            <>
              <RaiseIncidentForm />
            </>
          }
        ></Route>
        <Route
          path="/Incidents"
          element={
            <>
              <Incidents />
            </>
          }
        ></Route>
        <Route
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/Register"
          element={
            <>
              <Registration />
            </>
          }
        ></Route>
        <Route
          path="/Logout"
          element={
            <>
              <Logout />
            </>
          }
        ></Route>
        <Route
          path="/IncidentDetails/:parameter"
          element={
            <>
              <IncidentDetails />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
