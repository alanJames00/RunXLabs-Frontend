import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function RuntimeDropdown() {
    
    const langArray = [{name:'javascript', val:'js'}, {name:'python',val:'py'}, {name:'c',val:'c'}]

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
            helperText="Select the language"
          >
            {langArray.map((option) => (
              <MenuItem key={option.va} value={option.val}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    );
}