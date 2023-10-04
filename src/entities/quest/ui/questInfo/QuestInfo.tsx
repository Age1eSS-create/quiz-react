import React, { useEffect } from 'react';

import s from './QuestInfo.module.scss';
import {Button} from "@/shared/ui-kit";
import {Score, Time} from "@/shared/assets";
import {useGetQuestQuery} from "@/entities/quest/services/fetchQuest";
import {QuestInfoType} from "@/entities/quest/services/types";

interface propsType {
    id:number
}

export const QuestInfo = ({ id }:propsType) => {
    const { data = {} as QuestInfoType, error, isLoading } = useGetQuestQuery(id);

    console.log(data);
    return (
        <div className={s.QuestInfo}>
            <div className={s.scoreContainer}>
                <Score />
                {data.score}
            </div>
            <h1 className={s.title}>{data.title}</h1>
            <div className={s.subtitle}>{data.subtitle}</div>
            <div className={s.footerContainer}>
                <div className={s.time}>
                    <Time />
                    {data.time} сек.
                </div>
                <Button onCLick={()=>{}} mods={['blue']}>Начать игру!</Button>
            </div>
        </div>
    );
};
