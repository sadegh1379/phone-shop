import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary navbar-expand-sm navbar-dark ">
                     <a href="/" className="navbar-brand mr-0" alt="a"><h6>موبایل شاپ </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mr-0">
                           <Link to="/products" className="nav-link">فروشگاه</Link>
        
                        </li>
                    </ul>
                    <ButtonContainer>
                        <span>
                            <i className="fa fa-shopping-cart"></i>
                        </span>
                    </ButtonContainer>
                    </nav>
        </React.Fragment>
    )
}

const ButtonContainer  = styled.button`
border : 0 ;
background : transparent ;
font-size : 15px ;
color : red ;
`
export default Navbar;
