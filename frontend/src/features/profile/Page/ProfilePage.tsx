import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
// import DogWalkingTabPage from '../DogWalkingTab/Page/DogWalkingTabPage';
// import DogBoardingTabPage from '../DogBoardingTab/Page/DogBoardingTabPage';
// import DogNannyTabPage from '../DogNannyTab/Page/DogNannyTabPage';
// import { changeInitialPrice } from '../priceSlice';
// import { reset } from '../priceSlice';
// import { useAppDispatch } from '../../../../store';

import style from './ProfilePage.module.css';
import FormStepper from './components/FormStepper'
import DogPage from '../DogsData/Page/DogPage';
import dogIcon from './icons/dogIcon.svg';
import plusIcon from './icons/plusIcon.svg';
import UserData from '../UserData/UserData';
import UserNavbar from '../../admin/UserNavbar';
import Footer from '../../footer/Footer';

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
  `,
);

export default function ProfilePage(): JSX.Element {
  const [selectedTab, setSelectedTab] = React.useState('userPage');

  const handleTabChange = (event: React.MouseEvent<HTMLSpanElement>): void => {
    setSelectedTab(event.currentTarget.title);
  };

  return (
    <>
    <UserNavbar/>
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.tabs}>
          <div className={`${style.tabLabel} ${style.userPageLabel}`} title='userPage' onClick={handleTabChange}>Основные данные</div>
          <div className={`${style.tabLabel} ${style.dogPageLabel}`} title='dogPage'>Мои собаки</div>
          <div className={`${style.tabLabel} ${style.dogLabel}`} title='dogPage' onClick={handleTabChange}>
            <img className={style.dogIcon} src={dogIcon} alt='dog' onClick={handleTabChange} />Сирена
          </div>
          <img className={style.plusIcon} src={plusIcon} alt='plus' />
        </div>
        <div className={style.content}>
          {selectedTab === 'userPage' && (
            <>
              <h2>Основные данные</h2>
              <UserData />
            </>
          )}
          {selectedTab === 'dogPage' && (
            <>
              <h2>Мои собаки</h2>
              <FormStepper />
              {/* <DogPage /> */}
            </>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
