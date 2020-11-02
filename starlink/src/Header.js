import React, {Component} from 'react';
import starlinkLogo from 'Startlink_logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={starlinkLogo} className="logo" alt="logo" />
                <p className="title">
                    Starlink Tracker
                </p>
            </header>
        );
    }
}

export default Header;