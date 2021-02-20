import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const Navigation = (props) => {

  const scrollTop = () => {
   window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div>
      <Navbar fixed='top' style={{backgroundColor: '#1a1a1a'}} color="faded" light>
        <NavbarBrand className="mr-auto" style={{color: 'white' , fontWeight: 'bold'}}>Book Finder</NavbarBrand>
        <button onClick={scrollTop} style={{border: 'none', backgroundColor: '#1a1a1a' , color: 'white'}} href='/'>
          <i className="fas fa-bookmark fa-2x"></i>
        </button>
      </Navbar>
    </div>
  );
}

export default Navigation;
