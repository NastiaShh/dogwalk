import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toggleButtonClasses } from '@mui/material/ToggleButton';
import { styled } from '@mui/system';
import style from './WalkDurationToggle.module.css';
import { useAppDispatch } from '../../../../../../store';
import { changeWalkPrice } from '../../priceSlice';
import { calculateTotalPrice } from '../../priceSlice';

const MyToggleButton = styled(ToggleButton)(
  ({ theme }) => `
    border: none;
    border-radius: 30px !important;
    text-transform: none;
    background-color: #e6e6e6;
    font-size: 1.1em;
    padding: 0.3em 2em;

    &:hover {
      
    }

    &.${toggleButtonClasses.selected} {
      background-color: #398a6a ;
      color: #000;
    }

    &.${toggleButtonClasses.selected}:hover {
      background-color: #398a6a ;
      color: #000;
    }
  `,
);

const MyToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => `
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  `,
);

export default function WalkDurationToggle(): JSX.Element {
  const [walkPrice, setWalkPrice] = React.useState('650');
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newWalkPrice: string | null,
  ): void => {
    if (newWalkPrice !== null) {
      setWalkPrice(newWalkPrice);
      dispatch(changeWalkPrice(Number(newWalkPrice)));
      dispatch(calculateTotalPrice());
    }
  };
 
  return (
    <div className={style.container}>
      <MyToggleButtonGroup
        color="primary"
        value={walkPrice}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <MyToggleButton value='650' disableRipple={true} disableFocusRipple={true}>Длительность прогулки - 1 час</MyToggleButton>
        <MyToggleButton value='325' disableRipple={true}>Длительность прогулки - 30 мин</MyToggleButton>
      </MyToggleButtonGroup>
    </div>
  )
}
