import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            display:false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const fake = [1,2 ,3 ,4 ,5 ,6 ,7 ,8,9,10]
const fake2 = [2 , 6,4 , 8,3 , 9,12,14,17]
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: fake.map((f) => f),
            borderColor: '#24D29F',
            backgroundColor: '#24D29F',
        },
        {
            label: 'Dataset 2',
            data: fake2.map((f) => f),
            borderColor: '#0B694D',
            backgroundColor: '#0B694D',
        },
    ],
};


const LineChart = () => {
    return (
        <>

            <div className='bscontainer mt-6 '>
                <div className="border shadow-lg pb-2">
                    <div className='border-b flex justify-between p-4'>
                        <h2 className='font-semibold '>Resent Items Sales</h2>
                        <div className='flex justify-between'>
                            <div className='flex items-center '>
                                <span className='w-4 h-4   rounded-full inline-block bg-[#24D29F] mr-1 align-middle'></span>
                                <h2 className='text-[14px] font-medium'>Daily Sales</h2>
                                <span className='w-4 h-4 mx-1  rounded-full inline-block bg-[#DB3C23] mr-1 align-middle'></span>
                                <h2 className='text-[14px] font-medium'>Daily Views</h2>
                            </div>

                            <div className='ml-8 mr-2'>
                                Nav 2022
                            </div>

                        </div>
                    </div>
                    <div className='p-4'>
                        <Line options={options} data={data} />
                    </div>
                    <div className='flex justify-around items-center '>
                        <div className='text-center'>
                            <h2 className='text-[#24D29F] font-semibold text-[25px]'>478</h2>
                            <p className='text-[14px] font-medium'>Total Sales This Month</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-[#24D29F] font-semibold text-[25px]'>478</h2>
                            <p className='text-[14px] font-medium'>Total Sales This Month</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-[#24D29F] font-semibold text-[25px]'>478</h2>
                            <p className='text-[14px] font-medium'>Total Sales This Month</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default LineChart