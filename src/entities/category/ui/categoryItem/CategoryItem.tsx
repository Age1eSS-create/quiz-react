import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui-kit';

import { ICategory } from '../../model/types/category';
import s from './CategoryItem.module.scss';

interface propsType {
    category:ICategory
}

export const CategoryItem = ({ category } : propsType) => {
    const navigate = useNavigate();
    const onClick = () => {
        console.log('onClick');
        navigate(`/quest/${category.id}`);
    };

    return (
        <div className={classNames(s.item)}>
            <h1 className={s.title}>{category.title}</h1>
            <div className={s.info}>
                <p className={s.text}>{category.subtitle}</p>
                <p className={s.score}>{category.score} очков</p>
            </div>
            <div className={s.button}>
                <Button onCLick={onClick} mods={['outline']}>Пройти</Button>
            </div>
        </div>
    );
};
