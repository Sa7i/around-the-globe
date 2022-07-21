import React from 'react';

const CapitalsGame = () => {

    // const [flags, setFlags] = useState([])
    // const [randomFlag, setRandomFlag] = useState([])


    // const fetchData = async () => {
    //     const res = await axios.get('https://restcountries.com/v2/all')
    //     setFlags(res.data)
    //     console.log(res.data)

    // }

    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // function getRandomInts() {
    //     let randomFlags = [];
    //     for (let i = 0; i < 4; i++) {
    //         let random = getRandomInt(0, flags.length - 1)
    //         randomFlags.push(flags[random])
    //         console.log(randomFlags)
    //     }
    //     return randomFlags;

    // }

    // useEffect(() => {
    //     fetchData()
    //     setRandomFlag(getRandomInts())
    // }, [])

    return (
        <div>
            {/* {flags.splice(9, 1).map(flag => { return <img src={flag.flag} alt={flag.name} /> })} */}
        </div>
    );
};

export default CapitalsGame;