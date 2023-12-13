import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRecoilState } from 'recoil'
import { RuntimeState } from '../states/atoms/runtimeState';

export default function RuntimeDropdown() {
    

    const [runtime, setRuntime] = useRecoilState(RuntimeState);
    const langArray = [ {name:'javascript', val:'js'}, {name:'python',val:'py'}, {name:'c',val:'c'} ]
    console.log(runtime);

    return (

        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-language"
            select
            label="Runtime"
            defaultValue="js"
            value={runtime.val}
            onChange={e => {
                setRuntime(langArray.find(option => option.val == e.target.value))
            }}
            helperText="Select the language"
          >
            {langArray.map((option) => (
              <MenuItem key={option.val} value={option.val}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    );
}