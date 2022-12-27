import style from './CostCalculationPage.module.css';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

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
  font-size: 0.875rem;
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
  return (
    <div className={style.container}>
      <h3 className={style.title}>Рассчитать стоимость</h3>
      <TabsContainer defaultValue={0}>
        <TabsList>
          <Tab>Выгул собак</Tab>
          <Tab>Передержка</Tab>
          <Tab>Няня для собак</Tab>
        </TabsList>
        <TabPanel value={0}>Выгул собак</TabPanel>
        <TabPanel value={1}>Передержка</TabPanel>
        <TabPanel value={2}>Няня для собак</TabPanel>
      </TabsContainer>
    </div>
  );
};
