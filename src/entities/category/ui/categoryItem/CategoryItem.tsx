import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui-kit';

import { ICategory } from '../../model/types/category';
import s from './CategoryItem.module.scss';

interface propsType {
    category:ICategory
}

export const CategoryItem = ({ category } : propsType) => {
    const navigate = useNavigate();
    const [flagHover, setFlagHover] = useState(false);
    const onClick = () => {
        console.log('onClick');
        navigate(`/quest/${category.id}`);
    };

    return (
        <div className={classNames(s.item)} onMouseEnter={e => setFlagHover(true)} onMouseLeave={e => setFlagHover(false)} onClick={onClick}>
            <div className={s.img} />
            <div className={s.text}>
                <h2 className={s.title}>{category.title}</h2>
                <p className={s.subtitle}>{category.subtitle}</p>
            </div>
            {flagHover && (
                <div className={s.score}>
                    <div>{category.score} score</div>
                </div>
)}
        </div>
    );
};
