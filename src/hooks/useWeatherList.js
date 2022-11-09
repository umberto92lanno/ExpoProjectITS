import {useCallback, useEffect, useMemo, useState} from "react";
import {weathers} from "../mocks/weathers";

export const useWeatherList = () => {
    const [list , setList] = useState([]);
    const [text, setText] = useState('');

    const onChangeText = useCallback((text) => {
        setText(text);
    },[]);

    const filteredList = useMemo(() => {
        if (!text) {
            return list;
        }
        return list.filter(l => l.name.toLowerCase().startsWith(text.toLowerCase()));
    }, [list, text]);

    useEffect(() => {
        setTimeout(() => {
            setList(weathers);
        }, 3000);
    }, []);

    return {
        list,
        onChangeText,
        filteredList,
    }
}
