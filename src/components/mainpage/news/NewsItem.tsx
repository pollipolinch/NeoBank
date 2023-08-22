import style from './news.module.css';
import { NewsIt } from '../../../utils/types/types';

export const NewsItem = ({ data }: NewsIt) => {
    return (
        <div className={style.swiper_slide}>
            <img
                className={style.news__container_img}
                src={data.urlToImage}
                alt="news-img"
            />
            <a
                className={style.news__link}
                target="_blank"
                rel="noreferrer"
                href={data.url}
            >
                <h3 className={style.news__container_title}>{data.title}</h3>
            </a>
            <p className={style.news__container_text}>{data.description}</p>
        </div>
    );
};
