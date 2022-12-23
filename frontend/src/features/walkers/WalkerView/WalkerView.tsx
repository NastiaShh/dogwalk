import { useState } from 'react'
import { Avatar, Box, Stack, Typography, Rating } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

let color = createTheme({
  palette: {
    primary: {
      main: '#ff9a17',
    },
    secondary: {
      main: '#398a6a',
    },
  },
});

function WalkerView(): JSX.Element {
  const theme = useTheme();
  const [value, setValue] = useState<number | null>(3)
  console.log(value)
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ): void => {
    setValue(newValue)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '250px' }}>
        <Stack
          direction='row'
          spacing={2}
          sx={{ width: '100%', marginTop: '20px', border: 1, borderRadius: '5px', borderColor: 'grey.500' }}>

          <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
            sx={{ width: 48, height: 50 }}
          />

          <Stack sx={{ width: '60%' }}>

            <>
              <Stack spacing={2}>
                <Rating
                  value={value}
                  onChange={handleChange}
                  precision={0.5}
                  size='large'
                  icon={<PetsIcon fontSize='inherit' />}
                  emptyIcon={<PetsIcon fontSize='inherit' />}
                  name="simple-controlled"
                />
              </Stack>
              <Typography variant='body2'>Jane Doe</Typography>
            </>

          </Stack>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          sx={{ width: '100%', marginTop: '20px' }}>

          <Avatar
            src='https://t3.ftcdn.net/jpg/02/53/27/72/360_F_253277232_w0KhD626du0CeTExyY9HV5wANXHRjswV.jpg'
            alt='Jane Doe'
            variant='rounded'
            sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
          />

          <Stack sx={{ width: '60%' }}>

            <>
              <Stack spacing={2}>
                <Rating
                  value={value}
                  onChange={handleChange}
                  precision={0.5}
                  size='large'
                  icon={<PetsIcon fontSize='inherit' />}
                  emptyIcon={<PetsIcon fontSize='inherit' />}
                  name="simple-controlled"
                />
              </Stack>
              <Typography variant='body2'>Jane Doe</Typography>
            </>

          </Stack>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          sx={{ width: '100%', marginTop: '20px' }}>

          <Avatar
            src='https://img.freepik.com/freie-ikonen/important-person_318-10744.jpg'
            alt='Jane Doe'
            variant='rounded'
            sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
          />

          <Stack sx={{ width: '60%' }}>

            <>
              <Stack spacing={2}>
                <Rating
                  value={value}
                  onChange={handleChange}
                  precision={0.5}
                  size='large'
                  icon={<PetsIcon fontSize='inherit' />}
                  emptyIcon={<PetsIcon fontSize='inherit' />}
                  name="simple-controlled"
                />
              </Stack>
              <Typography variant='body2'>Jane Doe</Typography>
            </>

          </Stack>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          sx={{ width: '100%', marginTop: '20px' }}>

          <Avatar
            src='https://img.freepik.com/freie-ikonen/important-person_318-10744.jpg'
            alt='Jane Doe'
            variant='rounded'
            sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
          />

          <Stack sx={{ width: '60%' }}>

            <>
              <Stack spacing={2}>
                <Rating
                  value={value}
                  onChange={handleChange}
                  precision={0.5}
                  size='large'
                  icon={<PetsIcon fontSize='inherit' />}
                  emptyIcon={<PetsIcon fontSize='inherit' />}
                  name="simple-controlled"
                />
              </Stack>
              <Typography variant='body2'>Jane Doe</Typography>
            </>

          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default WalkerView
