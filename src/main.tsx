import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Typography } from '@mui/material';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { fetchImages } from '@/store/imagesSlice';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// Views
import Welcome from '@/views/Welcome';
import Play from '@/views/Play';
import Scoreboard from '@/views/Scoreboard';

// General styles
import './index.css';

// Material UI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const persistor = persistStore(store);

const router = createBrowserRouter([
    { path: '/', element: <Welcome /> },

    { path: '/play', element: <Play /> },

    { path: '/scoreboard', element: <Scoreboard /> },
]);

// eslint-disable-next-line react-refresh/only-export-components -- this component never refreshes
const WelcomeContainer = styled.div`
    height: 100%;
    text-align: center;
`;

// Pre-load images
store.dispatch(fetchImages());

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <WelcomeContainer>
                    <Typography variant="h3">Click the Fox! Game</Typography>

                    <RouterProvider router={router} />
                </WelcomeContainer>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
