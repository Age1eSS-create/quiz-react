import classNames from "classnames";
import React, { useState } from 'react';

import s from './Login.module.scss';
import {Button, Modal} from '@/shared/ui-kit';

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
    return (
        <Modal onClose={closeModal} show={true} title="Зарегестрироваться">
            <input type="text" placeholder={ 'Nickname' }/>
            <input type="text" placeholder={ 'password' }/>
            <Button onCLick={()=>{}} mods={['blue']}>Сохранить</Button>
        </Modal>
    );
};
