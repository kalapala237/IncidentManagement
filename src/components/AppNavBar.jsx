import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand to="">Incident Portal</Navbar.Brand>
        <Nav className="me-auto">
          {user.Role === "User" && (
            <NavLink
              style={{ textDecoration: "none", color: "black", margin: 5 }}
              to="Home"
              exact
            >
              Home
            </NavLink>
          )}
          {user.Role === "User" && (
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                margin: 5,
              }}
              to="RaiseIncident"
              exact
            >
              RaiseIncident
            </NavLink>
          )}
          {user.Role === "Admin" && (
            <NavLink
              style={{ textDecoration: "none", color: "black", margin: 5 }}
              to="Incidents"
              exact
            >
              Incidents
            </NavLink>
          )}
        </Nav>

        <Form className="d-flex">
          {!(user.Role === "User" || user.Role === "Admin") && (
            <NavLink to="/Login">
              <b>Login</b>
            </NavLink>
          )}
          {!(user.Role === "User" || user.Role === "Admin") && (
            <NavLink to="/Register" style={{ marginLeft: 20 }}>
              <b>Register</b>
            </NavLink>
          )}
          {
            <p>
              <b>{user.Email}</b>
            </p>
          }
          {(user.Role === "User" || user.Role === "Admin") && (
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: 20,
              }}
              to="Logout"
            >
              <b>Logout</b>
            </NavLink>
          )}
        </Form>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
