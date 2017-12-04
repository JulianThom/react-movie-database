import React, { Component } from 'react';
import { MenuItem,
         NavDropdown,
         NavItem,
         Nav,
         Navbar,
         FormGroup,
         FormControl,
         Button }
         from 'react-bootstrap';
import './index.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React MDB</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><i className="fa fa-ticket"></i> Movies</NavItem>
            <NavItem eventKey={2} href="#"><i className="fa fa-television"></i> TV Shows</NavItem>
            <NavItem eventKey={3} href="#"><i className="fa fa-user"></i> Actors</NavItem>
          </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
