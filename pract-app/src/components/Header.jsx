// Header.js
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import octashopLogo from '../assets/images/octashopLogo.png';
import user from '../assets/images/user.png';
import { useState,useEffect } from 'react';
import { GiNetworkBars } from "react-icons/gi";

const Header = () => {

    const [isLive, setIsLive] = useState(sessionStorage.getItem('isLive') === 'true');

    // Function to toggle isLive variable
    const toggleIsLive = () => {
      const newValue = !isLive; // Toggle value
      setIsLive(newValue); // Update state
      sessionStorage.setItem('isLive', newValue); // Update session storage
    };
  
    // Update session storage when isLive state changes
    useEffect(() => {
      sessionStorage.setItem('isLive', isLive);
    }, [isLive]);


    return (
        
    <header id="header"
        className="header fixed-top d-flex align-items-center justify-content-between px-3 flex-sm-nowrap flex-wrap">

        <div className="d-flex align-items-center justify-content-between px-2">
            <a href="index.html" className="logo d-flex align-items-center w-auto">
                <img alt='' src={octashopLogo} className="img-fluid py-sm-2 py-2" />
            </a>
            
        </div>
        

        <i
            className="tooltips fa-solid fa-magnifying-glass text-secondary fs-5 px-2 d-sm-none d-block mobile-search-icon"></i>

        <i className="fa fa-solid fa-bars fs-1 px-0 d-sm-none d-block h-btn"></i>

        <div className="search-bar px-2">
            <form className="search-form position-relative" method="POST" action="#">
                <input placeholder="Search" type="text" title="Enter search keyword"
                    className="form-control input-shadow input-shadow border rounded-4 fs-5" />
                <button type="submit" title="Search" className="position-absolute end-0 top-0 py-2 px-2 h-100"><i
                        className="tooltips fa-solid fa-magnifying-glass text-secondary fs-5 px-2"></i>
                </button>
            </form>
        </div>

        <div className="welcome border rounded-4 p-1 align-items-center text-dark px-2 my-md-3 d-sm-flex d-none mx-2">
            
            <img alt='' src={user} className="ps-2" width="40" />
            <span className="text-center px-3"> Welcome Octashop!<br/>Logged as a Octashop Admin</span>
        </div>
        {/* <div className="btn-group px-2 my-2 d-sm-block d-none profile-btn px-2"> */}
            
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className='profile btn-lg dropdown-toggle border px-3 py-2 rounded-4'>
            My Profile
            </Dropdown.Toggle>
            <Dropdown.Menu className=''>
                <Dropdown.Item href="/About">About Us</Dropdown.Item>
                        <Dropdown.Item>Help</Dropdown.Item>
                        <Dropdown.Item>Store Setting</Dropdown.Item>
                        <Dropdown.Item>User Activity</Dropdown.Item>
                        <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            {/* <button className="profile btn-lg dropdown-toggle border px-3 py-2 rounded-4" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                
            </button>
            <ul className="dropdown-menu ">
                
            </ul> */}
        {/* </div> */}
        {/* <div className="live text-center mx-0 px-2 mx-md-2" onClick={toggleLive}> */}
        <div className="live text-center mx-0 px-2 mx-md-2">

        <div>

        <div style={{width:"50px"}}>
        <GiNetworkBars
            style={{
              fontSize: "30px",
              color: isLive ? "green" : "inherit",
              cursor: "pointer",
            }}
             onClick={toggleIsLive} />  
        </div>

      <span className='text-dark fw-semibold text-overlay'> {isLive ? 'Live' : 'Dev'}</span>
    </div>
            
        </div>
        

       
    </header>
    
    );
};

export default Header;
