import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainPage } from '@/pages/content/main';
import { Quest } from '@/pages/content/quest';
import { AppWrapper } from '@/pages/wrapper/app';

export const createRouter = () => createBrowserRouter([
    {
        path: '/',
        element: <AppWrapper />,
        errorElement: <Navigate to="/error_404" />,
        children: [
            {
                path: '/main',
                element: <MainPage />,
                errorElement: <Navigate to="/error_404" />,
            },
            {
                path: '/quest/:id',
                element: <Quest />,
                errorElement: <Navigate to="/error_404" />,
            },
        ],
    },
]);
