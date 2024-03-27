import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Typography } from '@mui/material';

// Views
import Welcome from './views/Welcome';
import Play from './views/Play';

// General styles
import './index.css';

// Material UI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Scoreboard from './views/Scoreboard';

const router = createBrowserRouter([
    { path: '/', element: <Welcome /> },

    { path: '/play', element: <Play /> },

    { path: '/scoreboard', element: <Scoreboard /> },
]);

const WelcomeContainer = styled.div`
    height: 100%;
    text-align: center;
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WelcomeContainer>
            <Typography variant="h3">Click the Fox! Game</Typography>

            <RouterProvider router={router} />
        </WelcomeContainer>
    </React.StrictMode>
);
