import React, { Component } from 'react';
import { Navbar,
         FormGroup,
         FormControl,
         Button }
         from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

import config from '../../config'

class Navigation extends Component {
  render() {
    const {
      movie,
      tv,
      person
    } = config.categories;

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link exact="true" to="/">
                RMDB
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navList">
              <li>
                <NavLink
                  activeClassName="active"
                  to={`/${movie}/allmovies`}
                >
                  <i className="fa fa-ticket"></i> Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to={`/${tv}/allseries`}
                >
                  <i className="fa fa-television"></i> Series
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to={`/${person}`}
                >
                  <i className="fa fa-user"></i> Actors
                </NavLink>
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
