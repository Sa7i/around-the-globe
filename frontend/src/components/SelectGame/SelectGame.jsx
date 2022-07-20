import React from 'react';
import CountryLogo from '../../images/Countries.png'
import CapitalLogo from '../../images/Capitals.png'
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';


const SelectGame = () => {

    // const [flags, setFlags] = useState([])
    // const [randomFlag, setRandomFlag] = useState(flags.splice(0, 1))

    // const flagFinder = () => {
    //     let random = Math.floor(Math.random() * flags.length)
    //     setRandomFlag(flags.splice(random, 1))
    // }

    // const fetchData = async () => {
    //     axios.get('https://restcountries.com/v2/all')
    //         .then(res => {
    //             setFlags(res.data)
    //             console.log(res.data)
    //         })
    // }
    // useEffect(() => {

    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     flagFinder()
    // }, [flags])


    return (
        <div className='bg-[#18608C] h-screen flex items-center justify-center gap-6 font-happy-monkey text-xl'>
            <div className='rounded-xl shadow-lg bg-white text-center p-3 max-w-xs'>
                <NavLink to='/countries'>
                    <div className='mb-4'>
                        <img src={CountryLogo} alt='countries' className='rounded-xl' />
                    </div>
                    <p>COUNTRIES</p>
                </NavLink>
            </div>
            <div className='rounded-xl shadow-lg bg-white text-center p-3 max-w-xs'>
                <NavLink to='/capitals'>
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