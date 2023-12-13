import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRecoilState } from 'recoil'
import { ThemeState } from '../states/atoms/ThemeState';

export default function ThemeDropdown() {

    const [currTheme, setCurrTheme] = useRecoilState(ThemeState);
    const themeArray = [{name:'Dark-Mode', val:'vs-dark'}, {name: 'Light-Mode', val: 'light'}];
    console.log(currTheme);
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
            id="outlined-select-theme"
            select
            label="Theme"
            defaultValue="vs-dark"
            value={currTheme.val}
            onChange={e => {
                setCurrTheme(themeArray.find(option => option.val == e.target.value))
            }}
            helperText="Select the theme"
          >
            {themeArray.map((option) => (
              <MenuItem key={option.val} value={option.val}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    );
}