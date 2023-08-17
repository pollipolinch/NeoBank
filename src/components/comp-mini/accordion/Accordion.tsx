import React, { useState, FC } from 'react';
import { AccordionItem } from './AccordionItem';
import style from './accordion.module.css';
import { IAcc, FAQItem } from '../../../utils/types/types';

export const Accordion: FC<IAcc> = ({ faqList }) => {
    const [openId, setId] = useState<null | number>(null);

    return (
        <ul className={style.accordion}>
            {faqList.map((item: FAQItem, id: number) => {
                return (
                    <AccordionItem
                        onClick={() =>
                            id === openId ? setId(null) : setId(id)
                        }
                        faqItem={item}
                        isOpen={id === openId}
                        key={id}
                    />
                );
            })}
        </ul>
    );
};
