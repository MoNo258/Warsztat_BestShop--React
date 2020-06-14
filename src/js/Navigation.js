import React, {Component} from "react";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul className="menu__list">
                    <li className="menu__list-el">
                        <a href="#stats" className="menu__list-link">Why us</a>
                    </li>
                    <li className="menu__list-el">
                        <a href="#benefits" className="menu__list-link">Benefits</a>
                    </li>
                    <li className="menu__list-el">
                        <a href="#pricing" className="menu__list-link">Prices</a>
                    </li>
                    <li className="menu__list-el">
                        <a href="#contact" className="menu__list-link">Contact</a>
                    </li>
                </ul>

                <button className="page-nav-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <strong>Menu</strong>
                </button>
            </nav>
        );
    }
}

export default Navigation;