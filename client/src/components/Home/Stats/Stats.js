import React from 'react';
import './Stats.css';

import { LineChart, Line, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 100, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 400, pv: 2400, amt: 2400 },
];

function Stats(props) {
  return (
    <div className='row statsContainer'>
      <div className='statsHeader col-12'>Stats</div>
      <ResponsiveContainer width='100%' height='20%'>
        <LineChart className='chart' data={data}>
          <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Stats;
