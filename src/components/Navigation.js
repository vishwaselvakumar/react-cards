import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/style.css"
const Navigation =()=> {
  return (
    <Navbar expand="lg" className=" nav-body">
      <Container>
        <Navbar.Brand href="#"> <img className='nav-img' src={'https://www.shutterstock.com/image-vector/travel-logo-icon-vector-design-260nw-1028106712.jpg'} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-items' href="#action1">Home</Nav.Link>
            <Nav.Link className='nav-items' href="#action2">About</Nav.Link>
            <Nav.Link className='nav-items' href="#action2">Tours</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;