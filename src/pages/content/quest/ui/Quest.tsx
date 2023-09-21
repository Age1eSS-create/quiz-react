import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {QuestInfo} from "@/entities/quest";

export const Quest = () => {
    const { id } = useParams();

    return (
        id ? <QuestInfo id={+id} /> : <div>Вопрос не найден :(</div>
    );
};
