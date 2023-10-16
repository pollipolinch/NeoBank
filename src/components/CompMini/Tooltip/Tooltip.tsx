import React, { ReactElement, useState } from 'react';
import style from './tooltip.module.css';

type TTooltip = {
    children: ReactElement;
    text: string;
};

export const Tooltip: React.FC<TTooltip> = ({ children, text }) => {
    const [showTool, setShowTool] = useState(false);
    const mouseEnter = () => {
        setShowTool(true);
    };
    const mouseLeave = () => {
        setShowTool(false);
    };
    return (
        <div
            className={style.container}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {children}
            {showTool && <div className={style.tooltip}>{text}</div>}
        </div>
    );
};
