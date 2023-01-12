import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DogInfo from '../../DogsData/DogInfo/DogInfo';
import DogQuestions from '../../DogsData/DogQuestions/DogQuestions';
import Recommendations from '../../DogsData/Recommendations/Recommendations';
import DogPage from '../../DogsData/Page/DogPage';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';
import stepsIcon from '../icons/steps.png';
import style from './FormStepper.module.css';


const steps = ['Dog info', 'Dog Questions', 'Recommendations'];

export default function FormStepper(): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = (): number => {
    return steps.length;
  };

  const completedSteps = (): number => {
    return Object.keys(completed).length;
  };

  const isLastStep = (): boolean => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = (): boolean => {
    return completedSteps() === totalSteps();
  };

  const handleNext = (): void => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = (): void => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = (): void => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleBtnClick = (): void => {
    (completedSteps() === totalSteps() - 1) ? handleComplete() : handleNext();
  }
  
  const StepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 70,
    height: 50,
    display: 'flex',
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: '#398a6a',
      color: '#000',
    }),
    // ...(ownerState.completed && {
    //   backgroundImage:
    //     'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    // }),
  }));
  
  function ColorlibStepIcon(props: StepIconProps): JSX.Element {
    const { active, completed, className } = props;
  
    const icons: { [index: string]: number } = {
      1: 1,
      2: 2,
      3: 3,
    };
  
    return (
      <StepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </StepIconRoot>
    );
  }

  function StepperConnector(): JSX.Element {
    return (
      <img className={style.stepsIcon} src={stepsIcon} alt='paws' />
    )
  }

  return (
    <Box sx={{
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Stepper className={style.stepper} nonLinear activeStep={activeStep} alternativeLabel connector={<StepperConnector />}>
        {steps.map((label, index) => (
          <Step className={style.step} key={label} completed={completed[index]}>
            {/* <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton> */}
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
     
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>            
            <DogPage activeStep={activeStep}/>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 2, gap: '0.6em', marginBottom: '2em' }}>
              <button
                className={`${style.btn} ${style.btnBack}`} 
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                назад
              </button>
              {activeStep !== totalSteps() - 1 && (
                <button className={`${style.btn} ${style.btnNext}`} onClick={handleBtnClick}>
                  далее
                </button>
              )}
              {/* <button className={`${style.btn} ${style.btnNext}`} onClick={handleBtnClick}>
                  {activeStep === totalSteps() - 1
                          ? 'готово'
                          : 'далее'}                  
                </button> */}
              
              {/* {activeStep !== steps.length && (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                )} */}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
