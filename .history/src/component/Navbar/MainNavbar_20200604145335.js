import React, { Component } from 'react'

export default class MainNavbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar  navbar-expand-sm  navbar-dark bg-dark text-center">
                    <a className="navbar-brand text-danger" href="#">موبایل شاپ</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mr-4" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">خانه <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">فروشگاه</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">درباره ما</a>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             پروفایل
                            </a>
                            <div className="dropdown-menu mx-2  dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}

