import React from 'react';
import './Stats.css';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

function Stats(props) {
  React.useEffect(() => {}, [props.data]);

  const formatXAxis = tickItem => {
    let returnVal = new Date(tickItem);
    returnVal = returnVal.getMonth() + 1 + '/' + returnVal.getDate();
    return returnVal.toString();
  };

  const formatYAxis = tickItem => {
    return tickItem;
  };

  return (
    <>
      {props.data.join() !== '' ? (
        <div className='row statsContainer'>
          <div className='row'>
            <ResponsiveContainer className='col-12' width='100%' height={200}>
              <LineChart className='chart' data={props.data}>
                <Line type='monotone' dataKey='uv' stroke='#3f51b5' />
                <XAxis
                  dataKey='name'
                  tickFormatter={formatXAxis}
                  stroke='#3f51b5'></XAxis>
                <YAxis
                  tickFormatter={formatYAxis}
                  width={28}
                  stroke='#3f51b5'></YAxis>
                <Tooltip cursor={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Stats;
