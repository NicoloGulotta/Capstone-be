import React, { useContext } from "react";
import { Container, Navbar, Nav, Image, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function MyNavbar({ onLogout }) {
    const { isAuthenticated, user } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                {/* Brand/Logo */}
                <Navbar.Brand as={Link} to="/">
                    ScissorHand
                </Navbar.Brand>

                {/* Hamburger Menu (per schermi più piccoli) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Contenuto Collassabile */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Link di Navigazione Allineati a Sinistra */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {/* Mostra il link "Crea Post" solo se l'utente è autenticato */}
                        {/* {isAuthenticated && (
                            <Nav.Link as={Link} to="/create-post">
                                Crea Post
                            </Nav.Link>
                        )} */}
                    </Nav>

                    <Nav>
                        {/* Mostra il dropdown dell'utente se autenticato, altrimenti mostra login/registrazione */}
                        {isAuthenticated ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    variant="link"
                                    id="dropdown-user"
                                    className="d-flex align-items-center"
                                >
                                    {/* Usa l'avatar dell'utente se disponibile, altrimenti un'immagine predefinita */}
                                    <Image
                                        src={user?.avatar || "https://gravatar.com/avatar/003e729c32d55ae84cccd73f015a7276?s=400&d=robohash&r=x"}
                                        roundedCircle
                                        width="30"
                                        height="30"
                                        alt="Avatar Utente"
                                    />
                                    <span className="ms-2">{user?.name}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {user && (
                                        <Dropdown.Item as={Link} to={`/profile`}>
                                            Profilo
                                        </Dropdown.Item>
                                    )}
                                    <Dropdown.Item as={Link} to="/settings">
                                        Impostazioni
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/registrazione">
                                    Registrazione
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;