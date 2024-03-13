import React from 'react';
import profile from '../../assets/images/profile.png'
import PropTypes from 'prop-types';
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-auto max-w-6xl border-b-2 py-5 my-9'>
            <h1 className='text-6xl '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;