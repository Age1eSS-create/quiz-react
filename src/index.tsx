import 'app/styles/index.scss';

import ReactDOM from 'react-dom/client';

import {RouterProvider} from '@/app/providers/router';
import { StoreProvider } from '@/app/providers/store';

const root = document.getElementById('root');
if (!root) throw Error('Контейнер root не найдет');

ReactDOM.createRoot(root).render(
    <StoreProvider>
        <RouterProvider />
    </StoreProvider>,
);
