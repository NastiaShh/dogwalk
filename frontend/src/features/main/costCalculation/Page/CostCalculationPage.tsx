import * as React from 'react';
import style from './CostCalculationPage.module.css';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import DogWalkingTabPage from '../DogWalkingTab/Page/DogWalkingTabPage';
import DogBoardingTabPage from '../DogBoardingTab/Page/DogBoardingTabPage';
import DogNannyTabPage from '../DogNannyTab/Page/DogNannyTabPage';
import { changeInitialPrice } from '../priceSlice';
import { reset } from '../priceSlice';
import { useAppDispatch } from '../../../../store';

const Tab = styled(TabUnstyled)`
  font-family: inherit;
  color: #737373;
  cursor: pointer;
  font-size: 1em;
  background-color: transparent;
  width: 100%;
  height: 3em;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #398a6a;
  }

  &:focus {
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: #000;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  padding: 20px 12px;
  background: #fff;
  border-radius: 15px;
  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  width: 70%;
  background-color: #f3f3f3;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);

const TabsContainer = styled(TabsUnstyled)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `,
);

export default function CostCalculationPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleServiceChange = (event: React.MouseEvent<HTMLSpanElement>): void => {
    dispatch(reset());
    dispatch(changeInitialPrice(event.currentTarget.title));
  };

  return (
    <div className={style.container} id='cost'>
      <h3 className={style.title}>Рассчитать стоимость</h3>
      <TabsContainer defaultValue={0} >
        <TabsList>
          <Tab title='dogWalking' onClick={handleServiceChange}>Выгул собак</Tab>
          <Tab title='dogBoarding' onClick={handleServiceChange}>Передержка</Tab>
          <Tab title='dogNanny' onClick={handleServiceChange}>Няня для собак</Tab>
        </TabsList>
        <TabPanel value={0}>
          <DogWalkingTabPage />
        </TabPanel>
        <TabPanel value={1}><DogBoardingTabPage /></TabPanel>
        <TabPanel value={2}><DogNannyTabPage /></TabPanel>
      </TabsContainer>
    </div>
  );
};
