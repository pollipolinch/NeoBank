import React, { useState, FC } from 'react';
import { AccordionItem } from './AccordionItem';
import style from './accordion.module.css';
import { IAcc, FAQItem } from '../../../utils/types/types';

export const Accordion: FC<IAcc> = ({ faqList }) => {
    const [openId, setId] = useState<null | number>(null);
    const handlerOnClick = (id: number) => {
        id === openId ? setId(null) : setId(id);
    };
    return (
        <ul className={style.accordion}>
            {faqList.map((item: FAQItem, id: number) => {
                return (
                    <AccordionItem
                        onClick={() => handlerOnClick(id)}
                        faqItem={item}
                        isOpen={id === openId}
                        key={id}
                    />
                );
            })}
        </ul>
    );
};
