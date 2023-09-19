import React, {ChangeEvent, InputHTMLAttributes, useMemo} from 'react';
import s from './input.module.scss';
import classNames from 'classnames';

type ModeType = Array<'' | 'default' | 'outline'>
interface PropsType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    value: string
    className?: string;
    modes: ModeType;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}
export function Input ({ value, onChange, className, modes = ['default'], ...anyProps }: PropsType)  {
    const modeList = useMemo(() => modes.map((el) => s[el]), [modes]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };
    return (
        <input value={value} onChange={onChangeHandler} className={classNames(s.input, className, modeList)} {...anyProps}/>
    );
};
