import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { useLoaderData } from 'react-router-dom'


const Statistics = () => {
    const datas = useLoaderData();
    const chartData = datas.data;
    return (
       <div className='flex justify-center mt-10'>
         <div className='mx-auto'>
            <BarChart  width={380} height={400} data={chartData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Bar dataKey="total" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
       </div>
    );
};

export default Statistics;