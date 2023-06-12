import React, { useState , useEffect } from 'react'
import deal from '../../../assets/Stocks/timer.png'
import hoverColor from '../../../assets/Stocks/bluehover.png'
// import { AiFillPauseCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
const Deals = () => {

    const [countdownDate, setCountdownDate] = useState(new Date('12/25/2022').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };


    return (
        <>
            <div className='relative'>
                <img src={deal} alt="deal" />
                <div className='absolute top-0 w-full h-full '>
                    <img src={hoverColor} alt="hover" />
                </div>
                <div className='absolute top-[25%] right-[18%] bottom-0'>
                    <div className='flex justify-center my-3 '>
                        <div className='border border-[#24D29F] rounded-full shadow-lg p-3 w-[98px] mx-3 text-center flex justify-center items-center '>
                            <div className=' bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center flex justify-center items-center '>
                                <BsFillPlayFill className='text-[#24D29F] text-[3rem]' />
                            </div>
                        </div>
                    </div>
                    <h1 className='text-white text-center text-[2rem] font-semibold'>
                        Deal of The Day
                    </h1>
                    <p className='max-w-[450px] m-auto text-[14px] text-white'>Way is there to get clothing you’re sure to love than by making it</p>
                    <div className='flex items-center justify-center my-3  '>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  ' >
                                <h2 className='font-bold text-[20px]'>{state.days || '0'}</h2>
                                <p className='uppercase text-[10px] font-semibold text-center'>Days</p>
                            </div>
                        </div>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  '>
                                <h2 className='font-bold text-[20px]'>{state.hours || '0'}</h2>
                                <p className='uppercase text-[10px] font-semibold text-center'>hours</p>
                            </div>
                        </div>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  '>
                                <h2 className='font-bold text-[20px]'>{state.minutes || '0'}</h2>
                                <p className='uppercase text-[10px] font-semibold text-center'>Minuts</p>
                            </div>
                        </div>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  '>
                                <h2 className='font-bold text-[20px]'>{state.seconds || '0'}</h2>
                                <p className='uppercase text-[10px] font-semibold text-center'>seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deals