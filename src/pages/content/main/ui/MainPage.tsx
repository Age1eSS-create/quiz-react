import classNames from 'classnames';
import React from 'react';

import s from './MainPage.module.scss';
import {CategoryList} from '@/entities/category';

export const MainPage = () => {
    return (
        <div className={classNames(s.main)}>
            <CategoryList />
        </div>
    );
};
