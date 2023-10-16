import React, { useRef, FC } from 'react';
import Arrow from '../../../assets/img/Vector 9.png';
import style from './accordion.module.css';
import { IPropsAccord } from '../../../utils/types/types';

export const AccordionItem: FC<IPropsAccord> = ({
    faqItem: { q, a },
    onClick,
    isOpen,
}) => {
    const itemRef = useRef(null);
    return (
        <li className={style.accordion_item}>
            <button
                className={style.accordion_header}
                onClick={() => onClick()}
            >
                {q}
                <img
                    className={
                        isOpen
                            ? style.accordion_arrow_active
                            : style.accordion_arrow
                    }
                    src={Arrow}
                    alt="arrow"
                />
            </button>
            <div
                className={style.accordion_collapse}
                style={isOpen ? { height: '110px' } : { height: '0px' }}
            >
                <div className={style.accordion_body} ref={itemRef}>
                    {a}
                </div>
            </div>
        </li>
    );
};
