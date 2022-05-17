import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <Navbar bg="primary" variant="dark" className="rounded">
        <Container>
            <Navbar.Brand>Waiter.app</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                 <Navbar.Text>
                 <Link to='/'>Home</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );   
};
export default NavBar;