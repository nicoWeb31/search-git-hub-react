import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'




const NavBar = ({ title, icon }) => {

    return (

        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} />
                {title}
            </h1>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>

                    <Link to='/'>home</Link>
                </li>
            </ul>




        </nav>


    );

}


NavBar.defaultProps = {
    title: 'git',
    icon: 'fab fa-github'
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar;