import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Popup from '../Popup/Popup';

const CountriesGame = () => {

    const [countries, setCountries] = useState([])
    const [randomFlag, setRandomFlag] = useState([])
    const [answer, setAnswer] = useState([])
    const [score, setScore] = useState(0)
    const [fail, setFail] = useState(0)
    const [showPopup, setShowPopup] = useState(false)

    const fetchCountries = async () => {

        const resp = await axios.get('https://restcountries.com/v2/all')
        setCountries(resp.data)
        console.log("first", resp.data)

        const randomCountries = await getRandomInts(resp)
        setRandomFlag(randomCountries)
        console.log("second", randomCountries)

        const randomNumber = Math.floor(Math.random() * 3)

        const answer = randomCountries.filter((x, index) => index === randomNumber)
        console.log(answer.length)
        if (answer.length > 0) {
            setAnswer(answer[0])
        }
        console.log("third", answer[0])
    }

    const getRandomInts = async ({ data }) => {
        let randomFlags = [];

        while (randomFlags.length < 4) {
            let randNum = Math.floor(Math.random() * data?.length - 1);
            if (randomFlags.indexOf(randNum) === -1) {
                randomFlags.push(data?.[randNum]);
            }
        }
        return randomFlags
    }


    // button background color change.
    const checkAnswer = (e) => {
        console.log("target", e.target.value)
        if (e.target.value === answer?.name) {
            e.target.style.backgroundColor = "green"
        } else {
            e.target.style.backgroundColor = "red"
        }
    }
    //disable button color after click.
    const disableButtonColor = (e) => {
        if (e.target.style.backgroundColor === "green" || e.target.style.backgroundColor === "red") {
            setTimeout(() => {
                e.target.style.backgroundColor = "white"
            }, 300)
        }
    }

    // SCORE.
    const handleScore = (e) => {
        if (e.target.value === answer?.name) {
            setScore(score + 5)
        } else {
            setScore(score)
        }
    }

    const handleWin = () => {
        if (score === 50) {
            window.location.href = '/select'
        }
    }

    // FAIL SCORE.
    const handleFail = (e) => {
        if (e.target.value !== answer?.name) {
            setFail(fail + 1)
        } else {
            setFail(fail)
        }
    }

    const handlePopup = () => {
        if (fail === 3) {
            setShowPopup(true)
        }
    }

    const handleClick = (e) => {
        checkAnswer(e)
        handleScore(e)
        handleFail(e)
        disableButtonColor(e)
        handlePopup()
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    useEffect(() => {
        fetchCountries()
        handleWin()
    }, [score])


    return (
        <div className='bg-[#18608C] h-screen overflow-hidden font-inter font-semibold'>
            <div className='bg-white h-[80px] text-black shadow-xl'>
                <div className='flex justify-between items-center p-4 gap-5'>
                    <NavLink to='/select'>
                        <div className=' bg-[#18608C] rounded-xl p-3 px-6 shadow-xl flex gap-2 items-center text-white'>
                            <p>Back</p>
                        </div>
                    </NavLink>
                    <div className='bg-[#12755B] rounded-xl p-2 px-12 shadow-xl flex gap-2 items-center text-white'>
                        <p>Score</p>
                        <p className='text-2xl font-bold'>{score}</p>
                    </div>
                    <div className='bg-[#ea3c3c] rounded-xl p-2 shadow-xl flex gap-5 items-center text-white'>
                        <p>Fails</p>
                        <p className='text-2xl font-bold'>{fail}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center overflow-x-hidden p-12'>
                <div className='shadow-lg '>
                    <img src={answer?.flag} alt=""
                        className='w-[500px] h-[330px] flex items-center' />
                </div>
            </div>
            <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-1 absolute inset-x-0 bottom-0 text-md">
                {randomFlag?.map((flag, index) => (
                    <button key={index} value={flag?.name}
                        className="bg-white p-8 rounded-lg"
                        onClick={handleClick}>{flag?.name}
                    </button>
                ))}
                {showPopup ? <Popup /> : null}
            </div>
        </div>
    )
}

export default CountriesGame;