import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const questions = [
  {
    question: 'Сколько стоит прогулка и как происходит оплата?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'Кто ваши выгульщики?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'Какие гарантии, что с собакой всё будет в порядке?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'Вы можете покормить собаку после прогулки?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'Вы можете помыть лапы собаке после прогулки?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    question: 'Вы заключаете договор?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

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
      <div style={{ backgroundColor: '#f8efe8', paddingTop: '2vh', paddingBottom: '7vh' }}>
        <Box sx={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h3>Возможно, у Вас возникли вопросы</h3>
          <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
            <Grid item xs={6}>
              <Accordion style={{borderRadius: '10px'}} sx={{ textAlign: 'left', paddingLeft: '1vw', minHeight: '11vh'}}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Сколько стоит прогулка и как происходит оплата?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{borderRadius: '10px'}} sx={{textAlign: 'left', paddingLeft: '1vw', minHeight: '11vh'}}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Кто ваши выгульщики?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{borderRadius: '10px'}} sx={{textAlign: 'left', paddingLeft: '1vw', minHeight: '11vh'}}>
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Какие гарантии, что с собакой всё будет в порядке?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{borderRadius: '10px'}} sx={{textAlign: 'left', paddingLeft: '1vw', minHeight: '11vh'}}>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Вы можете покормить собаку после прогулки?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{borderRadius: '10px'}} sx={{textAlign: 'left', paddingLeft: '1vw', minHeight: '11vh'}}>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Вы можете помыть лапы собаке после прогулки?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={6}>
              <Accordion style={{borderRadius: '10px'}} sx={{textAlign: 'left', paddingLeft: '1vw', minHeight: '11vh'}}>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Вы заключаете договор?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
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
