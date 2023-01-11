import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from './TransitionsModal.module.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  border: '2px solid #398A6A',
  boxShadow: 24,
  p: 4,
};

type Page = 'login' | 'register';

export default function TransitionsModal(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState<Page>('login');

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const handleLinkClick = (event: React.MouseEvent, page: Page): void => {
    event.preventDefault();
    setPage(page);
  };

  return (
    <div>
      <span onClick={handleOpen}>Войти</span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className={styles.container}>
            {page === 'login' ? (
              <>
                <div className={styles.nav}>
                  <h3 className={styles.titleActive} onClick={(event) => handleLinkClick(event, 'login')}>Вход</h3>
                  <h3 className={styles.title} onClick={(event) => handleLinkClick(event, 'register')}>Регистрация</h3>
                </div>
                <LoginForm />
              </>
            ) : (
              <>
                <div className={styles.nav}>
                  <h3 className={styles.title} onClick={(event) => handleLinkClick(event, 'login')}>Вход</h3>
                  <h3 className={styles.titleActive} onClick={(event) => handleLinkClick(event, 'register')}>Регистрация</h3>
                </div>
                <RegisterForm />
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
