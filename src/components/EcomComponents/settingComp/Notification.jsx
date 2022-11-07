import React from 'react'
import { useState } from 'react'

const Notification = () => {
    const [companySetting, setCompanySetting] = useState(false)
    return (
        <>
            <div className='mb-6 mt-6  w-full'>
                <div className="tranding-heading relative">
                    <h1 className=" font-medium text-[20px] pl-2">Notification</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[20%]" />
                </div>
            </div>

            <div >
                <ul>
                    {Array(5).fill(5).map((item, _) => (
                        <li className="border-b ">
                            <div className='flex items-center p-4 '>

                                <div className='flex items-center '>
                                    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox"
                                            checked={companySetting}
                                            onChange={() => setCompanySetting(!companySetting)}
                                            id="default-toggle"
                                            class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#24D29F] dark:peer-focus:ring-[#24D29F] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#24D29F]"></div>
                                    </label>
                                    <div className="ml-2">
                                        <h2 className="font-medium text-[14px] text-[#313131]">Rating Reminders</h2>
                                        <p className="text-[14px] text-[#707070]">Send an Email Remainder Me To Rate An Item After Purchase</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Notification