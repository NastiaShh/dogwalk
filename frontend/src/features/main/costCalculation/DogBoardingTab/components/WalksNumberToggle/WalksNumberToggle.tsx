import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toggleButtonClasses } from '@mui/material/ToggleButton';
import { styled } from '@mui/system';

import { changeWalksPerDay } from '../../../priceSlice';
import { calculateTotalPrice } from '../../../priceSlice';
import { useAppDispatch } from '../../../../../../store';

const MyToggleButton = styled(ToggleButton)(
  ({ theme }) => `
    border: 1px solid transparent;
    border-radius: 50% !important;
    text-transform: none;
    background-color: #e6e6e6;
    color: rgba(0, 0, 0, 0.54);
    font-size: 1.8em;
    font-weight: bold;
    padding: 0.01em 0.6em;
    margin-top: 0.3em;

    &:hover {
      background-color: #398a6a;
      color: #fff;
    }

    &.${toggleButtonClasses.selected} {
      background-color: #398a6a;
      color: #fff;
    }

    &.${toggleButtonClasses.selected}:hover {
      background-color: #398a6a;
    }
  `,
);

const MyToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => `
  width: 25em;
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  margin-left: -0.8em;
  `,
);

export default function WalksNumberToggle(): JSX.Element {
  const [walksNumber, setWalksNumber] = React.useState(2);
  const dispatch = useAppDispatch();

  const handleWalksNumberChange = (
    event: React.MouseEvent<HTMLElement>,
    newWalksNumber: number | null,
  ): void => {
    if (newWalksNumber !== null) {
      setWalksNumber(newWalksNumber);
      dispatch(changeWalksPerDay(newWalksNumber));
      dispatch(calculateTotalPrice());
    }
  };
 
  return (
    <>
    <div style={{
      display: 'flex',
      marginTop: '2.5em',
      fontSize: '1.2em',
      justifyContent: 'space-between',
    }}>
      <div>
        Количество выгулов в сутки
      </div>
    </div>
    
    <div>
      <MyToggleButtonGroup
        value={walksNumber}
        exclusive
        onChange={handleWalksNumberChange}
        aria-label="Platform"
      >
        <MyToggleButton value={1} disableRipple={true}>1</MyToggleButton>
        <MyToggleButton value={2} disableRipple={true}>2</MyToggleButton>
        <MyToggleButton value={3} disableRipple={true}>3</MyToggleButton>
        <MyToggleButton value={4} disableRipple={true}>4</MyToggleButton>
        <MyToggleButton value={5} disableRipple={true}>5</MyToggleButton>
        <MyToggleButton value={6} disableRipple={true}>6</MyToggleButton>
      </MyToggleButtonGroup>
    </div>
    </>
  )
}
