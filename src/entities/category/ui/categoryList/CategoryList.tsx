import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import {ICategory, useGetCategoryListQuery} from '@/entities/category';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { horizontalScroll } from '@/shared/lib';

// import { getCategoryThunk } from '../../controller/getCategoryTHUNK';
import { CategoryItem } from '../categoryItem/CategoryItem';
import s from './CategoryList.module.scss';

export const CategoryList = () => {
    // const dispatch = useAppDispatch();
    const { data, error, isLoading } = useGetCategoryListQuery(1);
    // const [category, setCategory] = useState<Array<ICategory>>([]);

    useEffect(() => {
        console.log(data);
        // if (data) setCategory(data);
    }, [data]);

    // useEffect(() => {
    //     dispatch(getCategoryThunk());
    // }, [dispatch]);

    return (
        <div className={classNames(s.CategoryList)}>
            <h1 className={s.title}>Тесты онлайн</h1>
            <div className={s.filter}>
                <div className={s.multiSelect}>
                    <div>Фильтр по категориям</div>
                    <div>Фильтр по очкам</div>
                </div>
                <div className={s.search}>Поиск</div>
            </div>
            <div className={s.list}>
                {Array.isArray(data) && data.map((item) => (
                    <CategoryItem category={item} />
                ))}
            </div>
        </div>
    );
};
