import React, { useEffect, useState } from 'react';

import {useGetCategoryListQuery, useGetCategorySearchListQuery} from '@/entities/category/services/fetchCategory';
import { Input } from '@/shared/ui-kit';

export const SearchCategory = () => {
    const [text, setText] = useState('');
    // @ts-ignore
    // const {data, error, isLoading } = useGetCategorySearchListQuery(text);

    useEffect(() => {
        console.log('SEARCH: ', text);
    }, [text]);

    return (
        <Input value={text} modes={['outline']} placeholder="Поиск" onChange={(e) => setText(e.target.value)} />
    );
};
