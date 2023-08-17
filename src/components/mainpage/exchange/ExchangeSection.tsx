import style from './exchange.module.css';
import bank from '../../../assets/img/bank.png'
import {typesOfCur } from "../../../utils/constants/Api";
import ExchangeItem from "./ExchangeItem";


export default function ExchangeSection() {
    let date = new Date();
    let today = date.toLocaleDateString();    
    return (
        <section className={style.exchange}>
            <div className={style.exchange__currency}>
                <h2 className={style.exchange__title}>Exchange rate in internet bank</h2>
                <h3 className={style.exchange__text}>Currency</h3>
                <div className={style.exchange__cur}>
                {typesOfCur.map((item) => <ExchangeItem value={item} key={item} />)}
                </div>
                <button className={style.exchange__link}>All courses</button>
            </div>
            <div className={style.exchange__update}>
                <h3 className={style.exchange__update_text}>Update every 15 minutes, MSC {today}</h3>
                <img className={style.exchange__update_img} src={bank} alt="bank-img" />
            </div>
        </section>

    )
}