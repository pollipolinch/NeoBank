const newsContainer = document.querySelector('#news');
import { url_news } from "../../../utils/Api";
import { checkImg } from "../../../utils/checkImg";
import { checkDesc } from "../../../utils/checkDesc"
import './news.css'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'


class News {
    async show() {
        let news = ''
        let newsContent = ''
        try {
            const response = await fetch(url_news)
            const result = await response.json()
            news = result.articles

        } catch (error) {
            console.log(error.message)
        }
        console.log(news)
        for (let i = 0; i < news.length; i++) {
            const urlToImage = news[i].urlToImage
            const url = news[i].url
            const title = news[i].title
            let description = news[i].description
            const imgValid = urlToImage !== null ? await checkImg.isUrl(urlToImage) : false
            const descValid = description !== null ? await checkDesc.isDesc(description) : false
            if (imgValid && descValid) {
                newsContent += `
              <div class="swiper-slide">
              <img class="news__container_img" src=${urlToImage} alt="news-img">
              <a class="news__link" target="_blank" href=${url}><h3 class="news__container_title">${title}</h3></a>
              <p class ="news__container_text">${description}</p>
              </div>
              `
            }
            let template = `
            <section class="news">
            <h2 class="news__title">Current news from the world of finance</h2>
            <p class="news__text">We update the news feed every 15 minutes. You can learn more by clicking on the news
                you are interested in.
            </p>
            <div class="swiper-container">
                <div class="swiper-wrapper">${newsContent}</div>
            </div>
            <div class="news__buttons_container">
                <button class="swiper-button-prev"></button>
                <button class="swiper-button-next"></button>
            </div>
        </section>
            `;
            newsContainer.innerHTML = template;
        }
        const swiper = new Swiper('.swiper-container', {
            modules: [Navigation],
            breakpoints: {
                500: {
                    slidesPerView: 1.7,
                    spaceBetween: 30,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                700: {
                    slidesPerView: 2.1,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 2.3,
                    spaceBetween: 40,
                },
                900: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                },
                1000: {
                    slidesPerView: 2.8,
                    spaceBetween: 40,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1300: {
                    slidesPerView: 3.4,
                    spaceBetween: 50,
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        })
    }
}
export default new News();