import classNames from 'classnames';
import React, { ButtonHTMLAttributes, MouseEventHandler, ReactNode, useMemo } from 'react';

import s from './Button.module.scss';
import {Skeleton} from "@/shared/ui-kit";

interface propsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    onCLick:MouseEventHandler<HTMLButtonElement>,
    mods?: Array<'default' | 'outline' | 'blue'>,
    loading?:boolean

}
export const Button = ({
    children,
    onCLick,
    mods = ['default'],
    loading = false,
    ...anyProps
}:propsType) => {
    const classes = useMemo(() => {
        return mods.map((el) => s[el]);
    }, [mods]);
    return (
        <button onClick={onCLick} className={classNames(s.button, ...classes)} {...anyProps}>
            {loading
                && <div className={s.skeletonContainer}><Skeleton /></div>}
            {children}
        </button>
    );
};
