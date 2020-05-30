import React from 'react'

 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary navbar-expand-sm navbar-dark px-sm-5">
                     <a href="/" className="navbar-brand" alt="a"><h6><span className="fa fa-bascet"></span>موبایل شاپ </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                           <a href="/" className="nav-link">فروشگاه</a>
        
                        </li>
                        <li className="nav-item ml-5"></li>
                    </ul>
                    </nav>
        </React.Fragment>
    )
}

export default Navbar;
