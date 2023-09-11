import React, { useEffect, useState } from 'react';
import style from './exchange.module.css';
import {
    api_key_exchange,
    api_host_exchange,
    url_exchange,
} from '../../../utils/constants/api';
import { IExchangeItem } from '../../../utils/types/types';

export const ExchangeItem = ({ value }: IExchangeItem) => {
    const [currency, setCurrency] = useState<number | null>(null);
    const getExchange = async (value: string) => {
        let url = `${url_exchange}from=${value}&to=RUB&q=1`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': api_key_exchange,
                'X-RapidAPI-Host': api_host_exchange,
            },
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setCurrency(result);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getExchange(value);
    }, [value]);

    useEffect(() => {
        const timer = setInterval(() => {
            getExchange(value);
        }, 600000);
        return () => {
            clearInterval(timer);
        };
    }, [value]);

    return (
        <p className={style.exchange__cur_value}>
            {value}:
            <span className={style.exchange__cur_price}>
                {currency?.toFixed(2)}
            </span>
        </p>
    );
};
