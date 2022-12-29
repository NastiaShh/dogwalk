import * as React from 'react';
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/system';
import { sliderClasses } from '@mui/material/Slider';
import PetsIcon from '@mui/icons-material/Pets';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 30,
    label: '30',
  },
];

const MySlider = styled(Slider)(({ theme }) => ({
  color: '#398a6a',
  height: 3,
  padding: '15px 0',
  marginTop: '1.6em',
  '& .MuiSlider-thumb': {
    height: 35,
    width: 35,
    backgroundColor: '#dbffe9',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#398a6a',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-markLabel': {
    marginTop: '0.5em',
  },
  '& .MuiSlider-mark': {
    height: '1em',
  },
  '& .MuiSlider-markActive': {
    height: '1.5em',
    backgroundColor: '#398a6a',
  },
}));

type MyThumbComponentProps = {} & React.HTMLAttributes<unknown>

function MyThumbComponent(props: MyThumbComponentProps): JSX.Element {
  const { children, ...other } = props;
  return (
    <SliderThumb { ...other }>
      { children }
      <PetsIcon />
    </SliderThumb>    
  )
}

function valuetext(value: number): string {
  return `${value} выгулов`;
}

export default function RangeSlider(): JSX.Element {
  return (
    <>
    <div style={{
        textAlign: 'left',
        fontSize: '1.2em',
        marginTop: '2.5em',
      }}>
      Количество выгулов
    </div>
    
    <Box sx={{ 
      width: '100%',
    }}>
      <MySlider
        slots={{ thumb: MyThumbComponent }}
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="auto"
        min={1}
        max={30}
      />
    </Box>
    </>
    
  );
}
