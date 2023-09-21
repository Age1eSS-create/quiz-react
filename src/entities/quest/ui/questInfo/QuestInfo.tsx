import React, { useEffect } from 'react';

import s from './QuestInfo.module.scss';
import {Button} from "@/shared/ui-kit";
import {Score, Time} from "@/shared/assets";

interface propsType {
    id:number
}

export const QuestInfo = ({ id }:propsType) => {

    return (
        <div className={s.QuestInfo}>
            <div className={s.scoreContainer}>
                <Score />
                2000
            </div>
            <h1 className={s.title}>Title</h1>
            <div className={s.subtitle}>SubtitleSub title da Subtitle SubtitleSub title da SubtitleSubtitleSub title da SubtitleSubtitleSub title da SubtitleSubtitleSub title da SubtitleSubtitleSub title da SubtitleSubtitleSub title da Subtitle</div>
            <div className={s.footerContainer}>
                <div className={s.time}>
                    <Time />
                    200 сек.
                </div>
                <Button onCLick={()=>{}} mods={['blue']}>Начать игру!</Button>
            </div>
        </div>
    );
};
