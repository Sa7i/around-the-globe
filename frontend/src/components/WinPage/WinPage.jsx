import React from 'react';
import { NavLink } from 'react-router-dom';
import Champion from '../../images/18644.jpg'
import './WinPage.css'


const WinPage = () => {

    const arr = [

        "CONGRATULATIONS!",
        "AMAZING!",
        "PLEASE SIGN!",
        "MEDIUM RARE!",
        "WELL DONE!",

    ]

    const random = arr[Math.floor(Math.random() * arr.length)]
    console.log(random)



    return (
        <div className='Container w-screen h-screen flex flex-col justify-center items-center font-manrope'>
            <div className='w-1/2'>
                <img src={Champion} alt=''></img>
            </div>
            <div>
                <p className='text-3xl'>
                    {random}
                </p>
            </div>
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                <NavLink to='/select'>
                    <button
                        className="bg-[#18608C] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button">
                        Back to Select
                    </button>
                </NavLink>

            </div>
        </div>
    );
};

export default WinPage;