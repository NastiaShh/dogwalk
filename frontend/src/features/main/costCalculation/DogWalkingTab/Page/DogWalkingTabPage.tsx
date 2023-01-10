import { useState } from 'react';
import WalkDurationToggle from "../components/WalkDurationToggle/WalkDurationToggle";
import RangeSlider from '../components/RangeSlider/RangeSlider';
import DogsNumberToggle from '../components/DogsNumberToggle/DogsNumberToggle';
import CalculatedPrice from '../components/CalculatedPrice/CalculatedPrice';
// import PhoneNameForm from '../components/PhoneNameForm/PhoneNameForm';

export default function DogWalkingTabPage(): JSX.Element {
  const [price, setPrice] = useState(0);

  return (
    <div
      style={{
        width: '70%',
        margin: '2em auto',
      }}
    >
      <WalkDurationToggle />
      <RangeSlider />
      <DogsNumberToggle />
      <CalculatedPrice />
      {/* <PhoneNameForm /> */}
    </div>    
  );
};
