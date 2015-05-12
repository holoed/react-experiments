"use strict";

const Navigation = React.createClass({
  
  render: function() {
    let projects = ["Junior", "FunctionalCSharp", "RxBuilder"];
    let Navbar = ReactBootstrap.Navbar;
    let Nav = ReactBootstrap.Nav;
    let NavItem = ReactBootstrap.NavItem;
    let DropdownButton = ReactBootstrap.DropdownButton;
    let MenuItem = ReactBootstrap.MenuItem;
    return (<Navbar brand='Gattaca limited'>
              <Nav right>
                  <DropdownButton eventKey={1} title='Projects'>
                    { projects.map(function (p, i) {
                        return <MenuItem eventKey='{i}'>{p}</MenuItem>;
                      }) }
                  </DropdownButton>
                  <DropdownButton eventKey={2} title='About'>
                    <MenuItem eventKey='1'>LinkedIn Profile</MenuItem>
                    <MenuItem eventKey='2'>CV</MenuItem>
                  </DropdownButton>
              </Nav>
            </Navbar>);
  }
});