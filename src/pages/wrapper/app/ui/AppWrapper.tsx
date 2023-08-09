import classNames from 'classnames';
import React from 'react';
import { Outlet } from 'react-router-dom';

import {Header} from '@/widgets/header';

import s from './AppWrapper.module.scss';

export const AppWrapper = () => {
    return (
        <div className={classNames(s.wrapper)}>
            <Header />
            <Outlet />
        </div>
    );
};
