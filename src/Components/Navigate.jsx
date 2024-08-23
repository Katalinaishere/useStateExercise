import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
const Navigate = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Hooks Exercises</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/exercise1">Exercise 1</Nav.Link>
                        <Nav.Link href="/exercise2">Exercise 2</Nav.Link>
                        <Nav.Link href="/exercise3">Exercise 3</Nav.Link>
                        <Nav.Link href="/exercise4">Exercise 4</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigate
