import React, { Component } from 'react';
import { Navbar,
         FormGroup,
         FormControl,
         Button }
         from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                RMDB
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navList">
              <li>
                <Link to="/movies">
                  <i className="fa fa-ticket"></i> Movies
                </Link>
              </li>
              <li>
                <Link to="/series">
                    <i className="fa fa-television"></i> Series
                </Link>
              </li>
              <li>
                <Link to="/actors">
                  <i className="fa fa-user"></i> Actors
                </Link>
              </li>
            </ul>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
