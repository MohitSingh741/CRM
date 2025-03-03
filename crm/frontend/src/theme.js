// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff5252',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
