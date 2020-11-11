import React from 'react';
import './Stats.css';

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
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
          
          <button 
          className="toggleCharts" 
          onClick={() => props.handleToggleChart()}>
            {props.toggleChart ? "Line Chart" : "Range Chart"}
          </button>

          {props.toggleChart ? 
            (
              <ResponsiveContainer className='col-12' width='100%' height={200}>
                <BarChart className='chart' data={props.data}>
                  <XAxis                     
                    dataKey='name'
                    tickFormatter={formatXAxis}
                    stroke='#3f51b5' />
                  <YAxis
                    width={28}
                    stroke='#3f51b5' />
                  <Tooltip 
                  cursor={false} />
                  <Legend
                    width={60}
                    verticalAlign='top'
                    wrapperStyle={{
                      top: 0,
                      right: 0,
                      backgroundColor: '#d9d9d9',
                      border: '1px solid #3f51b5',
                      borderRadius: 3,
                      lineHeight: '30px',
                      color: '#3f51b5',
                      width: 'auto',
                      padding: '2px'
                    }} />
                  <Bar 
                    dataKey="uv" 
                    fill="#3f51b5" 
                    type='monotone' 
                    stroke='#3f51b5' 
                    name='Range'  />
                </BarChart>
              </ResponsiveContainer>
            )
          :
            (
              <ResponsiveContainer className='col-12' width='100%' height={200}>
                <LineChart className='chart' data={props.data}>
                  <Line type='monotone' dataKey='uv' stroke='#3f51b5' name='1RM' />
                  <XAxis
                    dataKey='name'
                    tickFormatter={formatXAxis}
                    stroke='#3f51b5'></XAxis>
                  <YAxis
                    tickFormatter={formatYAxis}
                    width={28}
                    stroke='#3f51b5'></YAxis>
                  <Tooltip cursor={false} />
                  <Legend
                    width={60}
                    verticalAlign='top'
                    wrapperStyle={{
                      top: 0,
                      right: 0,
                      backgroundColor: '#d9d9d9',
                      border: '1px solid #3f51b5',
                      borderRadius: 3,
                      lineHeight: '30px',
                      color: '#3f51b5',
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )
          }

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
