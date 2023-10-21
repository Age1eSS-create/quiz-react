import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import {categoryActions, getCategoryListSelector, ICategory, useGetCategoryListQuery} from '@/entities/category';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { horizontalScroll } from '@/shared/lib';
import { Skeleton } from '@/shared/ui-kit';

// import { getCategoryThunk } from '../../controller/getCategoryTHUNK';
import { CategoryItem } from '../categoryItem/CategoryItem';
import s from './CategoryList.module.scss';
import {useAppSelector} from "@/shared/hooks/useAppSelector";
import {useActions} from "@/shared/hooks";

export const CategoryList = () => {
    // const dispatch = useAppDispatch();
    const { data, error, isLoading } = useGetCategoryListQuery(null);
    // const { setCategory } = useActions(categoryActions);
    // const category = useAppSelector(getCategoryListSelector);
    // // const [category, setCategory] = useState<Array<ICategory>>([]);
    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className={classNames(s.CategoryList)}>
            <div className={s.list}>
                {Array.isArray(data) && data.map((item) => (
                    <CategoryItem category={item} />
                ))}
                {isLoading && (
                    <>
                        <div className={s.skeletonContainer}><Skeleton /></div>
                        <div className={s.skeletonContainer}><Skeleton /></div>
                        <div className={s.skeletonContainer}><Skeleton /></div>
                        <div className={s.skeletonContainer}><Skeleton /></div>
                    </>
                )}
            </div>
        </div>
    );
};
