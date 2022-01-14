import logo from './logo.svg';
import React, {useState} from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import BestBook from './BestBook'

import { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="/">Reading Log</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">메인</Nav.Link>
            <Nav.Link href="#pricing">커뮤니티</Nav.Link>
            <NavDropdown title="카테고리" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/bestbook">이달의 책</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">신간</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">추천 도서</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">올해의 책 투표</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              마이페이지
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

	  <Switch>

<Route exact path="/">
	{/* <BestBook /> */}
	
</Route>


<Route path="/bestbook">
  <BestBook />
</Route>



</Switch>






    </div>
	);
}





export default App;
