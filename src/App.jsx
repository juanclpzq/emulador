import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Home from '../src/pages/Home';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default App;
