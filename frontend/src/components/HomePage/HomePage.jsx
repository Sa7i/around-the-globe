import React from 'react';
import { NavLink } from 'react-router-dom';
import GameLogo from '../../images/Group 2.png'

const HomePage = () => {

    return (
        <div className='bg-[#18608C] h-screen flex justify-center items-center font-bold'>
            <div className="flex-col justify-center border-solid border-[#E2E8F0] items-center">
                <div className='flex justify-center'>
                    <img src={GameLogo} alt='logo' className='w-[70%]' />
                </div>
                <div className='flex justify-center'>
                    <NavLink to={'/select'}>
                        <button className='bg-white rounded-full p-2 hover:bg-[#19A883] hover:text-white px-10'>Start Game</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomePage;