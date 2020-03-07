/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
import './index.css'

const NavBar2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [plumbingOpen, updatePlumbingOpen] = useState(false)

  const [airOpen, updateAirOpen] = useState(false)
  const [heatOpen, updateHeatOpen] = useState(false)
  const [aboutOpen, updateAboutOpen] = useState(false)
  const [locOpen, updateLocOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div id='nav-bar-2'>
      <Navbar
        className='container-fluid  d-flex align-items-md-center align-items-xs-center'
        light
        expand='lg'
      >
        <NavbarBrand href='/'>
          <Link to='/'>
            <img
              width={220}
              height={65}
              className='img-fluid'
              src='https://hawthornephc.com/wp-content/uploads/2019/01/logo.png'
              alt='logo here'
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='row mr-auto ml-auto' navbar>
            <NavItem className='mr-lg-4'>
              <UncontrolledDropdown
                onMouseOver={() => updatePlumbingOpen(true)}
                onFocus={() => updatePlumbingOpen(true)}
                onMouseLeave={() => updatePlumbingOpen(false)}
                onBlur={() => updatePlumbingOpen(false)}
                toggle={() => updatePlumbingOpen(!plumbingOpen)}
                isOpen={plumbingOpen}
                nav
                inNavbar
              >
                <DropdownToggle className='nav-drop-down text-dark ' nav>
                  Plumbing
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu'>
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Water Heater Repair
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Rooter and Drain cleaning
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>Repiping</h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Trenchless Pipe & Sewer Repair & Replacement
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Commercial Plumbing
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link
                      to='/store-location-reno'
                      className='dd-hover ul-items'
                    >
                      <h5 className='drop-down-list-items'>
                        Water Replacement
                      </h5>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>

            <NavItem className='mr-lg-4'>
              <UncontrolledDropdown
                onMouseOver={() => updateAirOpen(true)}
                onFocus={() => updateAirOpen(true)}
                onMouseLeave={() => updateAirOpen(false)}
                onBlur={() => updateAirOpen(false)}
                toggle={() => updateAirOpen(!airOpen)}
                isOpen={airOpen}
                nav
                inNavbar
              >
                <DropdownToggle className='nav-drop-down text-dark ' nav>
                  Air Conditioning
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu'>
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Air Conditioning Repair
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className=' dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Air Conditioning Installation
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />

                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Air Conditioning Maintainence
                      </h5>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>

            <NavItem className='mr-lg-4'>
              <UncontrolledDropdown
                onMouseOver={() => updateHeatOpen(true)}
                onFocus={() => updateHeatOpen(true)}
                onMouseLeave={() => updateHeatOpen(false)}
                onBlur={() => updateHeatOpen(false)}
                toggle={() => updateHeatOpen(!heatOpen)}
                isOpen={heatOpen}
                nav
                inNavbar
              >
                <DropdownToggle className='nav-drop-down text-dark ' nav>
                  Heating
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu'>
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>Furnace Repair</h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Furnace Installation
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Heat Pump Installation
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>Thermostat</h5>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>

            <NavItem className='mr-lg-4'>
              <UncontrolledDropdown
                onMouseOver={() => updateAboutOpen(true)}
                onFocus={() => updateAboutOpen(true)}
                onMouseLeave={() => updateAboutOpen(false)}
                onBlur={() => updateAboutOpen(false)}
                toggle={() => updateAboutOpen(!aboutOpen)}
                isOpen={aboutOpen}
                nav
                inNavbar
              >
                <DropdownToggle className='nav-drop-down text-dark ' nav>
                  About
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu'>
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>Blog</h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>
                        Specials and Promotions
                      </h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>Senior Check</h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />
                  <DropdownItem className='dd-item-hover'>
                    <Link to='/' className='dd-hover ul-items'>
                      <h5 className='drop-down-list-items'>Careers</h5>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>

            <NavItem className='mr-lg-4'>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='nav-drop-down text-dark ' nav>
                  <Link to='/contact-us' className='dd-hover ul-items'>
                    <span className='contact-us-text text-dark'>
                      {' '}
                      Contact us
                    </span>
                  </Link>
                </DropdownToggle>
              </UncontrolledDropdown>
            </NavItem>

            <NavItem className='mr-lg-4'>
              <UncontrolledDropdown
                onMouseOver={() => updateLocOpen(true)}
                onFocus={() => updateLocOpen(true)}
                onMouseLeave={() => updateLocOpen(false)}
                onBlur={() => updateLocOpen(false)}
                toggle={() => updateLocOpen(!locOpen)}
                isOpen={locOpen}
                nav
                inNavbar
              >
                <DropdownToggle className='nav-drop-down text-dark ' nav>
                  Locations
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu'>
                  <DropdownItem className='dd-item-hover'>
                    <Link
                      to='/store-location-reno'
                      className='dd-hover ul-items'
                    >
                      <h5 className='drop-down-list-items'>Reno</h5>
                    </Link>
                  </DropdownItem>
                  <DropdownItem className='dd-divider' divider />

                  <DropdownItem className='dd-item-hover'>
                    <Link
                      to='/store-location-las-vegas'
                      className='dd-hover ul-items'
                    >
                      <h5 className='drop-down-list-items'>Las Vegas</h5>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
          <div>
            <div>
              <h2 className='text-red-dark bold-text roboto-sans-font medium-heading'>
                NEED SERVICE NOW?
              </h2>
            </div>
            <div>
              <h2 className=' roboto-sans-font medium-heading'>
                CALL (844) 236-0190
              </h2>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar2
