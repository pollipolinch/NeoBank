import { FC } from 'react';
import style from './tabs.module.css';
import classNames from 'classnames';
import { TProps, TTab } from '../../../utils/types/types';

export const Tabs: FC<TProps> = ({ onClick, selectedId, tabs }) => {
    return (
        <div className={style.container}>
            {tabs &&
                tabs.map((tab: TTab) => (
                    <div
                        className={classNames(
                            tab.id === selectedId
                                ? style.caurousel__button_selected
                                : style.caurousel__button
                        )}
                        key={tab.id}
                        onClick={() => onClick(tab.id)}
                    >
                        {tab.label}
                    </div>
                ))}
        </div>
    );
};
