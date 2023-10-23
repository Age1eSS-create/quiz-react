import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {getCategoryListSelector, useGetCategoryListQuery} from '@/entities/category';
import s from './CategoryList.module.scss';
import { Skeleton } from '@/shared/ui-kit';
import {useAppSelector} from "@/shared/hooks/useAppSelector";
import {CategoryItem} from "@/entities/category/ui/categoryItem/CategoryItem";


export const CategoryList = () => {
    // const dispatch = useAppDispatch();
    const { data, error, isLoading } = useGetCategoryListQuery();
    const category = useAppSelector(getCategoryListSelector);
    // const { setCategory } = useActions(categoryActions);
    // const category = useAppSelector(getCategoryListSelector);
    // // const [category, setCategory] = useState<Array<ICategory>>([]);
    useEffect(() => {
        console.log(data);
    }, [data]);
    useEffect(() => {
        console.log("category",category);
    }, [category]);
    console.log(category);

    return (
        <div className={classNames(s.CategoryList)}>
            <div className={s.list}>
                {Array.isArray(category) && category.map((item) => (
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
