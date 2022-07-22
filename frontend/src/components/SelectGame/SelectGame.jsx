import React from 'react';
import CountryLogo from '../../images/Countries.png'
import CapitalLogo from '../../images/Capitals.png'
import { NavLink } from 'react-router-dom';
import { TimerIconBlack } from '../../utils/svg';



const SelectGame = () => {


    return (
        <div className='bg-[#18608C] h-screen w-full flex flex-col items-center justify-center gap-6 font-manrope font-[500]'>
            <div className='flex justify-center bg-white p-3 rounded-xl text-xl w-[200px] '>
                Select Category
            </div>
            <div className='flex items-center justify-center gap-6  text-xl'>
                <div className='rounded-xl shadow-lg bg-white text-center p-3 max-w-xs duration-500 hover:scale-105'>
                    <NavLink to='/countries-quiz'>
                        <div className='mb-4'>
                            <img src={CountryLogo} alt='countries' className='rounded-xl' />
                        </div>
                        <p>COUNTRIES</p>
                    </NavLink>
                </div>
                <div className='rounded-xl shadow-lg bg-white text-center p-3 max-w-xs duration-500 hover:scale-105'>
                    <NavLink to='/capitals-quiz'>
                        <div className='mb-4'>
                            <img src={CapitalLogo} alt='capitals' className='rounded-xl' />
                        </div>
                        <p>CAPITALS</p>
                    </NavLink>
                    <div>
                    </div>
                </div>
            </div>
            <NavLink to='/time-attack'>
                <div className='flex justify-center items-center bg-white p-4 rounded-xl text-xl gap-2 duration-500 hover:scale-110'>
                    <i className=''><TimerIconBlack /></i>
                    Time Attack
                </div>
            </NavLink>
        </div>
    );
};

export default SelectGame;