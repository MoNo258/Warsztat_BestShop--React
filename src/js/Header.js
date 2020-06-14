import React, {Component} from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

class Header extends Component{
    render() {
        return (
            <header className='header'>
                <div className='header__container container'>
                    <Logo />
                    <Navigation />
                </div>
            </header>
        )
    }
}

export default Header;