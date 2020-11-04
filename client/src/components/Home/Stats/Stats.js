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

const data = [
  // Name is date
  // uv is weight
  { name: '2015-02-20T19:29:31.238Z', uv: 400, pv: 2400, amt: 2400 },
  { name: '2015-02-20T19:29:31.238Z', uv: 200, pv: 2400, amt: 2400 },
  { name: '2015-02-20T19:29:31.238Z', uv: 100, pv: 2400, amt: 2400 },
  { name: '2015-02-20T19:29:31.238Z', uv: 200, pv: 2400, amt: 2400 },
  { name: '2015-02-20T19:29:31.238Z', uv: 400, pv: 2400, amt: 2400 },
];

function Stats(props) {
  React.useEffect(() => {
    // These two lines parse the set data into an object, logs
    // let weights = props.data[0].setWeights.replace(/,\s*$/, "")
    // let toParse = `[${weights}]`
    // console.log(JSON.parse(toParse))
  }, []);

  const formatXAxis = tickItem => {
    let returnVal = new Date(tickItem);
    returnVal = returnVal.getMonth() + '/' + returnVal.getDate();
    return returnVal.toString();
  };

  return (
    <div className='row statsContainer'>
      <div className='row'>
        <ResponsiveContainer className='col-12' width='100%' height={200}>
          <LineChart className='chart' data={data}>
            <Line type='monotone' dataKey='uv' stroke='#3f51b5' />
            <XAxis dataKey='name' tickFormatter={formatXAxis}></XAxis>
            <YAxis type='number' tickCount={4} width={28}></YAxis>
            <Tooltip cursor={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Stats;
