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

  const setContainerClass = () => {
    if (props.data.join() !== '' && props.checkData) {
      return 'row statsContainer';
    } else {
      return 'row noStatsContainer';
    }
  };

  return (
    // 1. It has checked for data and returned something
    // 2. It has checked for data and found nothing
    // 3. It hasn't done anything yet, no search started
    <div className={setContainerClass()}>
      {props.data.join() !== '' && props.checkData ? (
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
      ) : !props.checkData ? (
        <div className='noStats'>No data to display</div>
      ) : (
        <div className='doStats'>
          Enter a search parameter above to see your data
        </div>
      )}
    </div>
  );
}

export default Stats;
