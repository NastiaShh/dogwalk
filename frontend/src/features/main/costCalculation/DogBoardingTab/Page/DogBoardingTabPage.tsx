import WalksNumberToggle from "../components/WalksNumberToggle/WalksNumberToggle";
import RangeSlider from '../components/RangeSlider/RangeSlider';
import DogsNumberToggle from '../components/DogsNumberToggle/DogsNumberToggle';
import CalculatedPrice from '../components/CalculatedPrice/CalculatedPrice';

export default function DogBoardingTabPage(): JSX.Element {
  return (
    <div
      style={{
        width: '70%',
        margin: '2em auto',
      }}
    >
      <WalksNumberToggle />
      <RangeSlider />
      <DogsNumberToggle />
      <CalculatedPrice />
    </div>    
  );
};
