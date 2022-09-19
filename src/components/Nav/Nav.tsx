import React, { PropsWithChildren } from 'react';
import style from "./Nav.module.css"
import logo from './random.svg'
import {links} from "./links.json"

var maxHeight = "50px";

type Link = {
    label:string;
    href:string;
}

// Turning all the links into an object
const Links: React.FC<{links: Link[]}> = () => {
    return (
        <div className={style.links_container} id="links_container">
            {links.map((link:Link) => { return (
                <div key={link.href} className={style.links}>
                    <a href={link.href}>
                        {link.label}
                    </a>
                </div>
            )})}
        </div>
    )
};

const Nav: React.FC<{ height:string}> = ({height}) => {
    return (
        <nav className={style.navbar} id="navbar" style={{height}}>
            <div className={style.logo_container} id="logo_container">
                {/* {links.map((link:Link) => {
                    return (
                        <div key={link.href} className={style.links}>
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </div>
                    )
                })} */}
                <img src={logo} className={style.logo_image} id="primary_logo_icon"  />
            </div>
            <Links links={links} />
        </nav>
    )
};

export default Nav;