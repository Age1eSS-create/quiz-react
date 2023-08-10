import classNames from 'classnames';
import React from 'react';

import { horizontalScroll } from '@/shared/lib';

import {CategoryItem} from '../categoryItem/CategoryItem';
import s from './CategoryList.module.scss';

export const CategoryList = () => {

    const tmpArray = [
        { id: 1, title: 'Тема вопросов', score: '2000' },
        { id: 2, title: 'Тема вопросов', score: '2000' },
        { id: 3, title: 'Тема вопросов', score: '2000' },
        { id: 4, title: 'Тема вопросов', score: '2000' },
        { id: 5, title: 'Тема вопросов', score: '2000' },
        { id: 1, title: 'Тема вопросов', score: '2000' },
        { id: 2, title: 'Тема вопросов', score: '2000' },
        { id: 3, title: 'Тема вопросов', score: '2000' },
        { id: 4, title: 'Тема вопросов', score: '2000' },
        { id: 5, title: 'Тема вопросов', score: '2000' },
    ];


    return (
        <div className={classNames(s.CategoryList)}>
            <div className={classNames(s.list)}>
                <div id="statistic-table" className={classNames(s.slider)} onWheel={horizontalScroll}>
                    {tmpArray.map((item) => (
                        <CategoryItem key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};
