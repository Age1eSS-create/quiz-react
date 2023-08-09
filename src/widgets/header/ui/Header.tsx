import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
import { getUser } from '@/entities/user';
import { Login } from '@/features/user/login';

export const Header = () => {
    const user = useSelector(getUser);
    console.log(user);
    return (
        <div className={classNames(s.header)}>
            <div className={classNames(s.container)}>
                <nav className={classNames(s.nav)}>
                    <Link to="./main">Главная</Link>
                    <Link to="./main">Вопросы</Link>
                </nav>
                {user
                    ? <div>Профиль</div>
                    : <Login />}
            </div>
        </div>
    );
};
