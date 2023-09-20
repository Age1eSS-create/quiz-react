import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {getUser, UserName} from '@/entities/user';
import { Login } from '@/features/user/login';

import s from './Header.module.scss';

export const Header = () => {
    const [userName, setUserName] = useState(localStorage.getItem('user'));
    const user = localStorage.getItem('user');

    const checkUser = async () => {
        setTimeout(() => {
            setUserName((prev:any) => localStorage.getItem('user'));
            checkUser();
        }, 5000);
    };

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <div className={classNames(s.header)}>
            <div className={classNames(s.container)}>
                <nav className={classNames(s.nav)}>
                    <Link to="./main">Главная</Link>
                    <Link to="./main">Вопросы</Link>
                </nav>
                {localStorage.getItem('user')
                    ? (
                        <div className={s.profile}>
                            <UserName />
                            <div>Выход</div>
                        </div>
                    )
                    : <Login />}
            </div>
        </div>
    );
};
