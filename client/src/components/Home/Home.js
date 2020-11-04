import React from 'react';
import './Home.css';

import Stats from './Stats/Stats';
import CalcPlates from './CalcPlates';

function Home(props) {
  return (
    <div className='row homeContainer'>
      {/* <Stats /> */}
      <CalcPlates />
    </div>
  );
}

export default Home;
