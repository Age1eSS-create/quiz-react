import classNames from 'classnames';
import React from 'react';

import s from './MainPage.module.scss';
import { CategoryList } from '@/entities/category';
import {SearchCategory} from "@/features/category/searchCategory";

export const MainPage = () => {
    return (
        <div className={classNames(s.main)}>
            <h1 className={classNames(s.title)}>
                Тесты онлайн
            </h1>
            <div className={s.filter}>
                <div className={s.multiSelect}>
                    <div>Фильтр по категориям</div>
                    <div>Фильтр по очкам</div>
                </div>
                <div className={s.search}><SearchCategory /></div>
            </div>
            <CategoryList />
        </div>
    );
};
