import { Navbar as NavbarBS, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <NavbarBS className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        <Button
          style={{ width: "3rem", height: "3rem" }}
          variant="outline-primary"
          className="rounded-circle position-relative"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Cart</title>
            <circle cx="176" cy="416" r="32" />
            <circle cx="400" cy="416" r="32" />
            <path d="M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z" />
          </svg>
          <div
            style={{
              width: "1.5rem",
              height: "1.5rem",
              bottom: "-12.5%",
              right: "-12.5%"
            }}
            className="rounded-circle bg-danger text-white position-absolute d-flex justify-content-center align-items-center"
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
};
