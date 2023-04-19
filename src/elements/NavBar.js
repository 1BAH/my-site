import React from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import styles from '../css/Header.module.css';

const NavBar = () => (
    <Navbar expand="lg" style={{ backgroundColor: '#013220' }}>
        <Container fluid>
            <Navbar.Brand href="/tp-info/#" style={{ color: '#7cfc00' }}>
                TP extra info & samples
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link className={styles.link} href="/tp-info/#/home">
                        Home
                    </Nav.Link>
                    <Nav.Link className={styles.link} href="/tp-info/#/gdb">
                        gdb
                    </Nav.Link>
                    <Nav.Link className={styles.link} href="/tp-info/#/ide">
                        ide
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="// TODO :)" className="me-2" aria-label="Search" style={{ color: 'indigo' }} disabled />
                    <Button variant="outline-secondary" disabled>
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar;
