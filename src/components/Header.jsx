import React from 'react'
const Header = () => {
    return (
        <div>
            <ul className='navBar'>
                <li className='common'><a className="active" href="">Home</a></li>
                <li className='common'><a href="">News</a></li>
                <li className='common'><a href="">Contact</a></li>
                <li className='common'><a href="">Projects</a></li>
                <li className='common'><a href="">Services</a></li>
                <li className='common'><a href="">About</a></li>
            </ul>
        </div>
    );
};

export default Header;

