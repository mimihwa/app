import React from 'react';
import {Link} from 'react-router-dom';

const navbar = (props) => {
    return (
        <div>
            <nav className='navbar'>
                <h1 className='logo'><Link to=''>logo</Link></h1>
                <ul className='navbar-nav'>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='movies'>Movies</Link></li>
                    <li><Link to='users'>Users</Link></li>
                </ul>
            </nav>
        </div>

    );
};

export default navbar;