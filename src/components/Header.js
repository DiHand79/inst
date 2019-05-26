import React, {Component} from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return(
            <header>
                <div className="container h-flex">
                    <a href="http://google.com" className="logo">
                        <img alt="logo" src={logo}/>
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a className="menu__links" href="#">
                                    Posts
                                </a>
                            </li>
                            <li>
                                <a className="menu__links" href="#">
                                    Profile
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}