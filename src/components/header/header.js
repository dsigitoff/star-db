import React from 'react'

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    StarWars-DB
                </a>
                <ul className="d-flex">
                    <li>
                        <a href="#">People</a>
                    </li>
                    <li>
                        <a href="#">PLanets</a>
                    </li>
                    <li>
                        <a href="#">Ships</a>
                    </li>
                </ul>
            </h3>
        </div>
    )
};

export default Header