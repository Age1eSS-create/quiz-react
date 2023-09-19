import React from 'react';

import s from './UserName.module.scss';

export const UserName = () => {
    const user = localStorage.getItem('user');
    return (
        <div className={s.user}>
            {user}
        </div>
    );
};
