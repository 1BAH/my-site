import React from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';

const NavBar = () => {
    const nav = useNavigate();
    const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const input = e.target.name.value.toLowerCase();

        nav(`/search?find=${input}`);
    };

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#013220' }}>
            <Container fluid>
                <Navbar.Brand href="/my-site/#/home" style={{ color: '#7cfc00' }}>
                    JKalinin
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className={styles.link} href="/my-site/#/home">
                            Home
                        </Nav.Link>
                        <Nav.Link className={styles.link} href="/my-site/#/gdb">
                            gdb
                        </Nav.Link>
                        <Nav.Link className={styles.link} href="/my-site/#/ide">
                            IDE
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handler}>
                        <Form.Control
                            id="name"
                            type="search"
                            placeholder="e.g. gdb"
                            className="me-2"
                            aria-label="Search"
                            style={{ color: '#013220' }}
                        />
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Действие
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Другое действие
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Что-то еще здесь
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <Button variant="outline-secondary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
