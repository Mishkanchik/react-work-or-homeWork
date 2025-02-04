import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router"; 
import "./headersColor.css";

function HeaderComponent() {
  
  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/" end style={{margin:"0 10px",textDecoration : "none"}}>
            <Navbar.Brand>Navbar</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/music"
              className={({ isActive }) =>
                isActive ? "colorActive" : "colorDefault"
              }
              style={{margin:"0 10px",textDecoration : "none"}}
            >
              Music
            </NavLink>

            <NavLink
              to="/recipe"
              className={({ isActive }) =>
                isActive ? "colorActive" : "colorDefault"
              }
              style={{margin:"0 10px",textDecoration : "none"}}
            >
              Recipe
            </NavLink>

            <NavLink
              to="/bibliography"
              className={({ isActive }) =>
                isActive ? "colorActive" : "colorDefault"
              }
              style={{margin:"0 10px",textDecoration : "none"}}
            >
              Bibliography of Shakespeare
            </NavLink>

            <NavLink
              to="/favorite-movie"
              className={({ isActive }) =>
                isActive ? "colorActive" : "colorDefault"
              }
              style={{margin:"0 10px",textDecoration : "none"}}
            >
              Favorite movie
            </NavLink>

          </Nav>
          
          <span style={{ color: "white", marginLeft: "auto" }}>
            {currentTime.toLocaleTimeString()}
          </span>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
