import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';

export default function PhoneNameForm(): JSX.Element {
  return (
    <div style={{
      textAlign: 'left',
      marginTop: '2em',
      marginLeft: '-0.7em'
    }}>
      <form>
        <TextField
          id="outlined-name"
          label="+7 (999) 999-99-99"
          style={{
            marginRight: '2em'
          }}
          // value={name}
          // onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="Имя"
          // value={name}
          // onChange={handleChange}
        />
        <button type="submit"
          style={{
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#ff9a16',
            color: '#fff',
            fontSize: '1.5em',
            padding: '0.6em 1.5em',
            marginLeft: '2.5em',
          }}
        >
          узнать точную цену
        </button>
      </form>
    </div>
    
  );
};
