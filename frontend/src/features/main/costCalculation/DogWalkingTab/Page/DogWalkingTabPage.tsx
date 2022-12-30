import style from './DogWalkingTabPage.module.css';
import WalkDurationToggle from "../components/WalkDurationToggle/WalkDurationToggle";
import RangeSlider from '../components/RangeSlider/RangeSlider';
import DogsNumberToggle from '../components/DogsNumberToggle/DogsNumberToggle';

export default function DogWalkingTabPage(): JSX.Element {
  return (
    <div className={style.container}>
      <WalkDurationToggle />
      <RangeSlider />
      <DogsNumberToggle />
    </div>    
  );
};
