import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./Component/LoginForm";
import NotFound from "./Pages/NotFound";
import Gacha from "./Pages/Gacha";
import List from "./Pages/List";
import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import Write from "./Pages/Write";
import Post from "./Pages/Post";

const Router = ({ user, setUser, stations, updateStation }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
          path="/post/detail/:id"
          element={user ? <Post user={user} /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
