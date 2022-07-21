import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesGame = () => {

    const [countries, setCountries] = useState([])
    const [randomFlag, setRandomFlag] = useState([])
    const [answer, setAnswer] = useState([])
    const [score, setScore] = useState(0)

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


    // match flag to answer and check if correct.  
    const checkAnswer = (e) => {
        console.log("target", e.target.value)
        if (e.target.value === answer?.name) {
            e.target.style.backgroundColor = "green"
        } else {
            e.target.style.backgroundColor = "red"
        }
    }


    const handleScore = (e) => {
        if (e.target.value === answer?.name) {
            setScore(score + 5)
        } else {
            setScore(score)
        }
    }

    const handleClick = (e) => {
        checkAnswer(e)
        handleScore(e)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    useEffect(() => {
        fetchCountries()
    }, [score])

    // after button onClick, reset background color    

    console.log("countries", countries)
    console.log("random", randomFlag)
    console.log("filter", answer)

    return (
        <div className='bg-[#18608C] h-screen overflow-hidden font-inter font-semibold'>
            <div className='bg-white h-[80px] text-black'>
                <div className='flex justify-center items-center p-4'>
                    <div className='bg-[#18608C] rounded-xl p-2 shadow-xl flex gap-2 items-center text-white'>
                        <p>Score</p>
                        <p className='text-2xl font-bold'>{score}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-14'>
                <div className='shadow-lg max-w-md'>
                    <img src={answer?.flag} alt="" />
                </div>
            </div>
            <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-1 absolute inset-x-0 bottom-0">
                {randomFlag?.map((flag, index) => (
                    <button key={index} value={flag?.name}
                        className="bg-slate-400 p-8 rounded-lg"
                        onClick={handleClick}>{flag?.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CountriesGame;