import classNames from 'classnames';
import style from './news.module.css';
import { useEffect, useState } from 'react';
import { url_news } from '../../../utils/constants/Api';
import { News } from '../../../utils/types/types';
import { NewsItem } from './NewsItem';

export const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [firstNews, setFirsrNews] = useState(0);
    const nextSlide = () => {
        if (news.length - 3 !== firstNews) {
            setFirsrNews(firstNews + 1);
        }
    };
    const prevSlide = () => {
        if (firstNews > 0) {
            setFirsrNews(firstNews - 1);
        }
    };
    async function show() {
        try {
            const response = await fetch(url_news);
            const result = await response.json();

            const validArticles = result.articles.filter(
                (item: News) =>
                    item.urlToImage !== null && item.description !== null
            );
            console.log(validArticles);
            return validArticles;
        } catch (error) {
            throw error;
        }
    }

    const getAllNews = async () => {
        const data = await show();
        setNews(data);
    };
    useEffect(() => {
        getAllNews();
    }, []);
    return (
        <section className={style.news}>
            <h2 className={style.news__title}>
                Current news from the world of finance
            </h2>
            <p className={style.news__text}>
                We update the news feed every 15 minutes. You can learn more by
                clicking on the news you are interested in.
            </p>
            <div className={style.swiper_container}>
                <div className={style.swiper_wrapper}>
                    {Array.from(news)
                        .slice(firstNews, firstNews + 3)
                        .map((ell: News) => (
                            <NewsItem key={ell.url} data={ell} />
                        ))}
                </div>
            </div>
            <div className={style.news__buttons_container}>
                <button
                    onClick={prevSlide}
                    className={classNames(
                        firstNews > 0
                            ? style.button_prev
                            : style.button_prev_disabled
                    )}
                ></button>
                <button
                    onClick={nextSlide}
                    className={classNames(
                        firstNews + 3 < news.length
                            ? style.button_next
                            : style.button_next_disabled
                    )}
                ></button>
            </div>
        </section>
    );
};
