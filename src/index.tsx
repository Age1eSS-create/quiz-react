import 'app/styles/index.scss';

import ReactDOM from 'react-dom/client';

import { StoreProvider } from '@/app/providers/store';
import {RouterProvider} from '@/app/providers/router';

const root = document.getElementById('root');
if (!root) throw Error('Контейнер root не найдет');

ReactDOM.createRoot(root).render(
    <StoreProvider>
        <RouterProvider />
    </StoreProvider>,
);
