import { Avatar, Box, Stack, Typography, Rating } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import Walker from '../types/Walker';

type WalkersProps = {
  walker: Walker;
}


function WalkerView({ walker }: WalkersProps): JSX.Element {
  // const handleChange = (
  //   _event: React.ChangeEvent<{}>,
  //   newValue: number
  // ): void => {
  //   setRating(newValue)
  // }
  return (
    <Box sx={{ width: '250px' }}>
      <Stack
        direction='row'
        spacing={2}
        sx={{ width: '100%', marginTop: '20px' }}>

        <Avatar
          src={walker.photo}
          alt='Jane Doe'
          variant='rounded'
          sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}
        />

        <Stack sx={{ width: '60%' }}>

          <>
            <Stack spacing={2}>
              <Rating
                value={walker.rating}
                // onChange={handleChange}
                precision={0.5}
                size='large'
                icon={<PetsIcon fontSize='inherit' />}
                emptyIcon={<PetsIcon fontSize='inherit' />}
                name="read-only"
                readOnly
              />
            </Stack>
            <Typography variant='body2'>{walker.name}</Typography>
          </>

        </Stack>
      </Stack>
    </Box>
  )
}

export default WalkerView
