import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 9, 5, 6],
            backgroundColor: [
                '#1A8868',
                '#D26571',
                '#699FEA',
                '#F1D07A',
                '#E7A662',

            ],
            borderColor: [
                '#1A8868',
                '#D26571',
                '#699FEA',
                '#F1D07A',
                '#E7A662',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart() {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[200px]'>
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}
