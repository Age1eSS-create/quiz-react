import React, {useEffect, useState} from 'react';
import {Input} from "@/shared/ui-kit";
import {searchCategoryThunk} from "@/features/category/searchCategory/controller/searchCategoryController";
import {useThunk} from "@/shared/hooks";

export const SearchCategory = () => {
    const [text, setText] = useState('');
    const searchCategory = useThunk(searchCategoryThunk);

    useEffect(() => {
        console.log('SEARCH: ', text);
        searchCategory(text);
    }, [text]);

    return (
        <Input value={text} modes={['outline']} placeholder={"Поиск"} onChange={e => setText(e.target.value)} />
    );
};
