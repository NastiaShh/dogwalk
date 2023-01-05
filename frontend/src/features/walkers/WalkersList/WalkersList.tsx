import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { loadWalkers } from "../walkersSlice";
import { selectWalkers } from "../selectors";
import WalkerView from "../WalkerView/WalkerView";


function WalkersList(): JSX.Element {
  const walkers = useSelector(selectWalkers)
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(loadWalkers())
  }, [dispatch])
  return (
    <div>
      {walkers.map((walker) => (
        <WalkerView key={walker.id} walker={walker} />
      ))}
    </div>
  )
}

export default WalkersList
