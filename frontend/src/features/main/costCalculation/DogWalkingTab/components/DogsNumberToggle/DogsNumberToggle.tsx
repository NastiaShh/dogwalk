import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toggleButtonClasses } from '@mui/material/ToggleButton';
import { styled } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const MyToggleButton = styled(ToggleButton)(
  ({ theme }) => `
    border: 1px solid transparent;
    border-radius: 50% !important;
    text-transform: none;
    background-color: inherit;
    color: #000;
    font-size: 1.8em;
    font-weight: bold;
    padding: 0.01em 0.6em;
    margin-top: 0.3em;

    &:hover {
      background-color: inherit;
      border: 1px solid #398a6a !important;
    }

    &.${toggleButtonClasses.selected} {
      background-color: inherit;
      color: #000;
      border: 1px solid #398a6a !important;
    }

    &.${toggleButtonClasses.selected}:hover {
      background-color: inherit;
    }
  `,
);

const MyToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => `
  width: 21%;
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  margin-left: -0.8em;
  `,
);

const MyFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  alignItems: 'flex-start',
  '& .MuiFormControlLabel-label': {
    fontSize: '1em',
    color: '#545454',   
  }
  
}));

export default function DogsNumberToggle(): JSX.Element {
  const [dogsNumber, setDogsNumber] = React.useState(1);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newDogsNumber: number | null,
  ): void => {
    if (newDogsNumber !== null) {
      setDogsNumber(newDogsNumber);
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
        Количество собак
      </div>
      <div>
        <MyFormControlLabel control={
            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              style={{
                color: '#398a6a',
                padding: 0,
                marginRight: '0.5em',
              }}
              // checked={checked}
              // onChange={handleChange}
              // inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Первая пробная прогулка"
        />
      </div>
    </div>
    
    <div>
      <MyToggleButtonGroup
        value={dogsNumber}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <MyToggleButton value={1} disableRipple={true}>1</MyToggleButton>
        <MyToggleButton value={2} disableRipple={true}>2</MyToggleButton>
        <MyToggleButton value={3} disableRipple={true}>3</MyToggleButton>
        <MyToggleButton value={4} disableRipple={true}>4</MyToggleButton>
      </MyToggleButtonGroup>
    </div>
    </>
  )
}
