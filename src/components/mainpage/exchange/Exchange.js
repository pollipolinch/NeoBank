const exchange = document.querySelector('#exchange');
import bank from '../../../assets/img/bank.png'
import { api_host_exchange,api_key_exchange,url_exchange } from "../../../utils/Api";
import './exchange.css'

class Exchange {
    async show() {
        let date = new Date();
        let today = date.toLocaleDateString();
        let exchangeContent = '';
        const typesOfCur = ['USD', 'EUR', 'CNY', 'JPY', 'CHF', 'TRY']
        for (let i = 0; i < typesOfCur.length; i++) {
            let url = `${url_exchange}from=${typesOfCur[i]}&to=RUB&q=1`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': api_key_exchange,
                    'X-RapidAPI-Host': api_host_exchange
                }
            };
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result)
                exchangeContent += `
                <p class=exchange__cur_value>${typesOfCur[i]}:
                <span class=exchange__cur_price>${Number(result).toFixed(2)}</span>
            </p>
                `
            } catch (error) {
                console.error(error);
            }
        }

        let template = `
        <section class="exchange">
        <div class="exchange__currency">
            <h2 class="exchange__title">Exchange rate in internet bank</h2>
            <h3 class="exchange__text">Currency</h3>
            <div class="exchange__cur">
            ${exchangeContent}
            </div>
            <a class="exchange__link" href="#">All courses</a>
        </div>
        <div class="exchange__update">
            <h3 class="exchange__update_text">Update every 15 minutes, MSC ${today}</h3>
            <img class="exchange__update_img" src=${bank} alt="bank-img">
        </div>
    </section>
        `;
        exchange.innerHTML = template;
    }
}
export default new Exchange();