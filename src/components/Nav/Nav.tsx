import React, { PropsWithChildren } from 'react';
import './Nav.css';
import logo from './random.svg'

var maxHeight = "50px";

const Nav: React.FC<{maxHeight:string, maxWidth:string, height:string}> = ({maxHeight, maxWidth, height}) => {
    return (
        // <div>NavBar</div>
        <nav className="navbar" id="navbar" style={{height}}>

            <div className="logo_container">
                {/* <span>Logo</span> */}
                <img src={logo} id="primary_logo_icon"  />
            </div>
        </nav>
    )
}

export default Nav;