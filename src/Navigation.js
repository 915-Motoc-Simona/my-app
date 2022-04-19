import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, NavItem, NavbarToggler, Collapse, Nav, Container} from 'reactstrap';

function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div >
    <Container textAlign='center'>
      <Navbar fixed='top' color="light" light >
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/">First Page</Link> 
          </NavItem>
          <NavItem>
            <Link to="/secondPage">Second Page</Link> 
          </NavItem>
          <NavItem>
            <Link to="/thirdPage">Third Page</Link> 
          </NavItem>
          <NavItem>
            <Link to="/fourthPage">Fourth Page</Link> 
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>
    </Container>
    </div>
  )
}

export default Navigation;