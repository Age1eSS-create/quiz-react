import classNames from "classnames";
import React, { useState } from 'react';

import s from './Login.module.scss';
import {Button, Modal} from '@/shared/ui-kit';
import {Input} from "@/shared/ui-kit/input/Input";
import {login} from "@/features/user/login/controller/loginUser";

export const Login = () => {
    const [flagShow, setFlagShow] = useState(false);

    const handlerOpenModal = (e:any):void => {
        setFlagShow(true);
    };

    return (
        <div className={s.login}>
            <Button onCLick={handlerOpenModal} mods={['outline']}>Log in</Button>
            {/* eslint-disable-next-line no-use-before-define */}
            {flagShow && <ModalLogin closeModal={() => setFlagShow(false)} />}
        </div>
    );
};

interface propsType {
    // eslint-disable-next-line @typescript-eslint/ban-types
    closeModal: () => void;
}
const ModalLogin = ({ closeModal }:propsType) => {
    const [loginForm, setLoginForm] = useState<{ name: string, password: string }>({ name: '', password: '' });
    const [loading, setLoading] = useState(false)
    const handlerChangeInput = (e:any) => {
        e.preventDefault();
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handlerLogin = async (e:any) => {
        e.preventDefault();
        setLoading((e:any) => true);
        await login(loginForm.name);
        setLoading((e:any) => false);
        closeModal();
    };

    return (
        <Modal onClose={closeModal} show={true} title="Зарегестрироваться">
            <Input value={loginForm.name} onChange={handlerChangeInput} modes={['outline']} name="name" type="text" placeholder="Nickname" />
            <Input value={loginForm.password} onChange={handlerChangeInput} modes={['outline']} name="password" type="password" placeholder="password" />
            <Button onCLick={handlerLogin} mods={['blue']} loading={loading}>Сохранить</Button>
        </Modal>
    );
};
