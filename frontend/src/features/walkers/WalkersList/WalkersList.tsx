import { useSelector } from "react-redux";
import { selectWalkers } from "../selectors";
import WalkerView from "../WalkerView/WalkerView";


function WalkersList(): JSX.Element {
  const walkers = useSelector(selectWalkers)
  return (
    <div>
      {walkers.map((walker) => (
        <WalkerView key={walker.id} walker={walker} />
      ))}
    </div>
  )
}

export default WalkersList
