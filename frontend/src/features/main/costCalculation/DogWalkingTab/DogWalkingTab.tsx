import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toggleButtonClasses } from '@mui/material/ToggleButton';
import { styled } from '@mui/system';
import style from './DogWalkingTab.module.css';

const MyToggleButton = styled(ToggleButton)(
  ({ theme }) => `
    border: none;
    border-radius: 30px !important;
    text-transform: none;
    background-color: #e6e6e6;
    font-size: 1.2em;
    padding: 0.3em 2em;
    margin-top: 2em;

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
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  `,
);

export default function DogWalkingTab(): JSX.Element {
  const [walkDuration, setWalkDuration] = React.useState('1 h');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newWalkDuration: string | null,
  ): void => {
    if (newWalkDuration !== null) {
      setWalkDuration(newWalkDuration);
    }
  };
 
  return (
    <div className={style.container}>
      <MyToggleButtonGroup
        color="primary"
        value={walkDuration}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <MyToggleButton value="1 h" disableRipple={true} disableFocusRipple={true}>Длительность прогулки - 1 час</MyToggleButton>
        <MyToggleButton value="30 min" disableRipple={true}>Длительность прогулки - 30 мин</MyToggleButton>
      </MyToggleButtonGroup>
    </div>
  )
}
