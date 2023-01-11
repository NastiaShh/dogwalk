import DurationSlider from '../components/DurationSlider/DurationSlider'
// import WalksNumberToggle from "../components/WalksNumberToggle/WalksNumberToggle";
import RangeSlider from '../components/RangeSlider/RangeSlider';
import DogsNumberToggle from '../components/DogsNumberToggle/DogsNumberToggle';
import CalculatedPrice from '../components/CalculatedPrice/CalculatedPrice';

export default function DogNannyTabPage(): JSX.Element {
  return (
    <div
      style={{
        width: '70%',
        margin: '2em auto',
      }}
    >
      <DurationSlider />
      <RangeSlider />
      {/* <WalksNumberToggle /> */}
      <DogsNumberToggle />
      <CalculatedPrice />
    </div>    
  );
};
