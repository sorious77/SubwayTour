import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Component/Home";
import LoginForm from "./Component/LoginForm";
import NotFound from "./Component/NotFound";
import Gacha from "./Component/Gacha";
import List from "./Component/List";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import Write from "./Component/Write";
import Post from "./Component/Post";

const Router = ({ user, setUser, stations, updateStation }) => {
  return (
    <BrowserRouter>
      <Navbar bg="light" variant="light">
        <Container fluid className="mx-3">
          <NavbarBrand>Subway Tour</NavbarBrand>
          <Nav className="justify-content-end">
            <Link to="/" className="btn btn-light">
              Home
            </Link>
            <LoginForm user={user} setUser={setUser} />
            {user && (
              <>
                <Link to="/gacha" className="btn btn-light">
                  Gacha
                </Link>
                <Link to="/list" className="btn btn-light">
                  List
                </Link>
                <Link to="/write" className="btn btn-light">
                  Board
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/gacha"
          element={
            user ? (
              <Gacha stations={stations} updateStation={updateStation} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/list" element={user ? <List /> : <Navigate to="/" />} />
        <Route
          path="/write"
          element={user ? <Write user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/post/detail"
          element={user ? <Post user={user} /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
