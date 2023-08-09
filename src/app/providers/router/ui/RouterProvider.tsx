import { RouterProvider as Provider } from 'react-router-dom';

import { createRouter } from '../config/createRouter';

export const RouterProvider = () => <Provider router={createRouter()} />;
