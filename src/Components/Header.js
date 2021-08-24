import {Navbar, Container, Nav, NavDropdown, Button, InputGroup, FormControl, Row, Col} from 'react-bootstrap'

const Header = () => {
    return ( 
        <Navbar expand="lg" className="ml-auto header-container bg-light bg-gradient main-header">
            <Container>
                <Navbar.Brand href="#home">Hobbiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#link">Explorar</Nav.Link>
                        <Nav.Link href="#link">Quem somos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               
                <Container> 
                    <InputGroup type="search" className="nav-search-bar">
                        <FormControl placeholder="Pesquisar..."/>
                    </InputGroup>
                </Container>

                <Container>
                    <div className="nav-button-group">
                        <Button variant="outline-secondary" className="nav-button">Entrar</Button>
                        <Button variant="primary" className="nav-button">Cadastrar</Button>
                    </div>
                </Container>
            </Container>
        </Navbar>
     );
}
 
export default Header;