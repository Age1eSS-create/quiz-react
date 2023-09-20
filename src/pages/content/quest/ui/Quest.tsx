import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Quest = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log('Request server');
    }, []);

    return (
        <div>
            QUEST { id }
        </div>
    );
};
