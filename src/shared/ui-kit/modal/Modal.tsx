import classNames from 'classnames';
import React, { ReactNode } from 'react';

import s from './Modal.module.scss';

interface propsType {
    show:boolean;
    onClose: () => void;
    title:string;
    children: ReactNode,
}
export const Modal = ({
    show,
    onClose,
    title,
    children,
}:propsType) => {
    return (
        <div className={classNames(s.modal, show && s.show)}>
            <div className={s.container}>
                <div className={s.head}>{title}</div>
                <div className={s.body}>
                    {children}
                </div>
            </div>
        </div>
    );
};
