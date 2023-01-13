import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 22,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
    background: {
      paper: '#398a6a',
    },
  },
});

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Questions(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="questions" style={{ backgroundColor: '#f8efe8', paddingTop: '2vh', paddingBottom: '7vh' }}>
        <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
          <h3 style={{ marginBottom: '10vh' }}>Возможно, у Вас возникли вопросы</h3>
          <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
            <Grid item xs={6}>
              <Accordion style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', color: '#f8efe8' }} 
                sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '14.8vh' }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon style={{color: '#f8efe8'}}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Как сделать заказ?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Сделать заказ вы можете, обратившись по нашему номеру телефона, или самостоятельно оформить заказ на сайте. 
                    В течение 15 минут после отправления заявки с сайта с вами свяжется менеджер для уточнения информации.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', color: '#f8efe8' }} 
                sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '14.8vh' }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon style={{color: '#f8efe8'}}/>}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Что такое передержка и кто такой догситтер?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Передержка — это возможность оставить собаку в надежных руках на время вашего отсутствия по случаю 
                    отпуска или командировки. Человека, который присмотрит за вашим питомцем, и называют догситтер.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', color: '#f8efe8' }} 
                sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '14.8vh' }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon style={{color: '#f8efe8'}} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Сколько стоит прогулка?<br></br></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Стоимость 1 выгула составляет 650 руб. В эту сумму входят: прогулка 1 час; мытье лап и кормление собаки. 
                    При необходимости можно увеличить время выгула за дополнительную плату.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', color: '#f8efe8' }} 
                sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '14.8vh' }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon style={{color: '#f8efe8'}} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Вы можете покормить собаку после прогулки?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Да, наши выгульщики могут покормить вашего питомца, если вы заранее подготовите миску с кормом. 
                    Кормление входит в состав услуги по выгулу. При оформлении заказа менеджер согласовывает с клиентом 
                    необходимость данной процедуры. При отказе от кормления стоимость выгула не меняется.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', color: '#f8efe8' }} 
                sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '14.8vh' }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon style={{color: '#f8efe8'}} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Вы можете помыть лапы собаке после прогулки?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Да, мытье лап входит в состав услуги по выгулу. При оформлении заказа менеджер согласовывает с 
                    клиентом необходимость данной процедуры. При отказе от мытья лап стоимость выгула не меняется.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', color: '#f8efe8' }} 
                sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '14.8vh' }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon style={{color: '#f8efe8'}} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Есть ли страхование в Dogwalk?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Да, мы страхуем собак от травм, полученных на прогулке по вине выгульщика.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </div>

    </ThemeProvider>
  );
}
