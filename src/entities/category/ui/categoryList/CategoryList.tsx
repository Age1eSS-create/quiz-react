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
            <div className={classNames(s.list)}>
                <div id="statistic-table" className={classNames(s.slider)} onWheel={horizontalScroll}>
                    {isLoading
                        && <div>Загрузка</div>}
                    {Array.isArray(data) && data?.map((item:ICategory) => (
                        <CategoryItem key={item.id} category={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
