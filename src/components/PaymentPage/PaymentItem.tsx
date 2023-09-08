import { IPayment } from '../../utils/types/types';
import style from './payment.module.css';

interface IPaymentItemProps {
    data: IPayment;
}
export const PaymentItem = ({ data }: IPaymentItemProps) => {
    return (
        <tr className={style.payment_body}>
            {Object.values(data).map((item, id) => (
                <td className={style.payment_body_item} key={id}>
                    {item}
                </td>
            ))}
        </tr>
    );
};
