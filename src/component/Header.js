import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
    return (

        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href="/">Reading Log</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="카테고리" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Reading Log</NavDropdown.Item>
            <NavDropdown.Item href="/">Movie Log</NavDropdown.Item>
            <NavDropdown.Item href="/">Drama Log</NavDropdown.Item>
            <NavDropdown.Item href="/">Stock log</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/board">커뮤니티</Nav.Link>
            <Nav.Link href="/bestbook">도서 투표</Nav.Link>
            {/* <Nav.Link href="/new">신간 도서</Nav.Link>
            <Nav.Link href="/recommend">추천 도서</Nav.Link> */}

        </Nav>
        <Nav>
            <Nav.Link href="/Login">로그인</Nav.Link>
            <Nav.Link href="/mypage"> 마이페이지 </Nav.Link>
            {/* <Nav.Link eventKey={2} href="mypage"> 마이페이지 </Nav.Link> */}
            
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
        }

        export default  Header;