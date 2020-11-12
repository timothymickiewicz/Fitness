import React from 'react';
import './CreateExercise.css';

import Selection from './Selection';

import Chest from '../../assets/icons/chest.png';
import Back from '../../assets/icons/back.png';
import Arms from '../../assets/icons/arms.png';
import Legs from '../../assets/icons/legs.png';
import Abs from '../../assets/icons/abs.png';
import Cardio from '../../assets/icons/cardio.png';

const icons = [
  { icon: Chest, name: 'Chest' },
  { icon: Arms, name: 'Arms' },
  { icon: Legs, name: 'Legs' },
  { icon: Back, name: 'Back' },
  { icon: Abs, name: 'Abs' },
  { icon: Cardio, name: 'Cardio' }
];

function CreateExercise(props) {
  const [selection, setSelection] = React.useState('');

  const handleBack = () => {
    setSelection('');
  };

  return !selection ? (
    <div className="exerciseContainer row">
      {icons.map((key, index) => {
        return (
          <button
            key={index}
            className="iconWrap"
            type="submit"
            onClick={() => setSelection(key.name)}>
            <img
              id={key.name}
              className="iconItem"
              src={key.icon}
              alt={'type of workout is' + key.name}></img>
          </button>
        );
      })}
    </div>
  ) : (
    <Selection getList={props.getList} type={selection} onClick={handleBack} />
  );
}

export default CreateExercise;
