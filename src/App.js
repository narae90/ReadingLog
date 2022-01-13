import logo from './logo.svg';
import React, {useState} from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="#home">Reading Log</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">메인</Nav.Link>
            <Nav.Link href="#pricing">커뮤니티</Nav.Link>
            <NavDropdown title="카테고리" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">이달의 책</NavDropdown.Item>
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

      <div class="responsive-container">
		<div class="grid">
			<div class="grid-column">
								<a class="product" href="#">
					<div class="product-image">
						<img src="https://assets.codepen.io/285131/cosmonaut.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
              <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>

				<a class="product" href="#">
					<div class="product-image">
						<img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
				<a class="product" href="#">
					<div class="product-image">
							<img src="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
			</div>
			<div class="grid-column">
				<a class="product" href="#">
					<div class="product-image">
						<img src="https://assets.codepen.io/285131/palmistry.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
				<a class="product" href="#">
					<div class="product-image"> 
						<img src="https://assets.codepen.io/285131/fish-gas-mark.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
				<a class="product" href="#">
					<div class="product-image">
						<img src="https://assets.codepen.io/285131/mysterious-gangster-character-style.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
			</div>
			<div class="grid-column">
				<a class="product" href="#">
					<div class="product-image">
						<img src="https://assets.codepen.io/285131/adventure.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
				<a class="product" href="#">
					<div class="product-image">
						<img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" />
					</div>
					<div class="product-content">
						<div class="product-info">
            <h2 class="product-title">책 이름</h2>
							<p class="product-price">작가 이름</p>
						</div>
						<button class="product-action">
              <i class="material-icons-outlined"></i></button>
					</div>
				</a>
			</div>
		</div>
	</div>








    </div>
  );
}

export default App;
