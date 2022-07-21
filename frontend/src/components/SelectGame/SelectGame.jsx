import React from 'react';
import CountryLogo from '../../images/Countries.png'
import CapitalLogo from '../../images/Capitals.png'
import { NavLink } from 'react-router-dom';


const SelectGame = () => {


    return (
        <div className='bg-[#18608C] h-screen flex items-center justify-center gap-6 font-happy-monkey text-xl'>
            <div className='rounded-xl shadow-lg bg-white text-center p-3 max-w-xs'>
                <NavLink to='/countries-quiz'>
                    <div className='mb-4'>
                        <img src={CountryLogo} alt='countries' className='rounded-xl' />
                    </div>
                    <p>COUNTRIES</p>
                </NavLink>
            </div>
            <div className='rounded-xl shadow-lg bg-white text-center p-3 max-w-xs'>
                <NavLink to='/capitals-quiz'>
                    <div className='mb-4'>
                        <img src={CapitalLogo} alt='capitals' className='rounded-xl' />
                    </div>
                    <p>CAPITALS</p>
                </NavLink>
            </div>
        </div>
    );
};

export default SelectGame;