import style from "./payment.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";
import { PaymentItem } from "./PaymentItem";
import { PaymentText } from "./PaymentText";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  postAgree,
  paymentsAscSort,
  paymentsDescSort,
  showModal,
} from "../../utils/store/cardSlice";
import { LoaderCom } from "../CompMini/Loader/LoaderCom";
import { AppStatus, ISort } from "../../utils/types/types";

export const PaymentShedule = () => {
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();
  const { monthlyPayments, loader, status } = useAppSelector(
    (store) => store.cardSlice
  );
  const [agree, setAgree] = useState(false);
  const [paymentHeader, setpaymentHeader] = useState<ISort[]>([
    { name: "NUMBER", sort: "number", active: false },
    { name: "DATE", sort: "date", active: false },
    { name: "TOTAL PAYMENT", sort: "totalPayment", active: false },
    { name: "INTEREST PAYMENT", sort: "interestPayment", active: false },
    { name: "DEBT PAYMENT", sort: "debtPayment", active: false },
    { name: "REMAINING DEBT", sort: "remainingDebt", active: false },
  ]);
  const changeAgree = () => {
    setAgree(!agree);
  };
  const postAgreeId = () => {
    dispatch(postAgree(applicationId));
  };
  const sortAsc = (item: ISort) => {
    dispatch(paymentsAscSort(item.sort));
    const changeItem = paymentHeader.map((ell) => {
      if (ell.sort === item.sort) {
        return {
          ...ell,
          active: true,
        };
      } else {
        return ell;
      }
    });
    setpaymentHeader(changeItem);
  };
  const sortDesc = (item: ISort) => {
    dispatch(paymentsDescSort(item.sort));
    const changeItem = paymentHeader.map((ell) => {
      if (ell.sort === item.sort) {
        return {
          ...ell,
          active: false,
        };
      } else {
        return ell;
      }
    });
    setpaymentHeader(changeItem);
  };
  const openModal = () => {
    dispatch(showModal(true));
  };
  if (status === AppStatus.DOCUMENT_CREATED) {
    return <PaymentText />;
  }
  if (loader) {
    return <LoaderCom />;
  }
  return (
    <section>
      <div className={style.payment}>
        <div className={style.payment_info}>
          <h3 className={style.payment_title}>Payment Schedule</h3>
          <p className={style.payment_stepNum}>Step 3 of 5</p>
        </div>
        <table className={style.payment_table}>
          <thead>
            <tr className={style.payment_header}>
              {paymentHeader.map((item) => {
                return (
                  <td className={style.payment_header_item} key={item.name}>
                    {item.name}
                    {item.active ? (
                      <div
                        onClick={() => sortDesc(item)}
                        className={style.button_down}
                      ></div>
                    ) : (
                      <div
                        onClick={() => sortAsc(item)}
                        className={style.button_up}
                      ></div>
                    )}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {monthlyPayments?.map((item, id) => (
              <PaymentItem data={item} key={id} />
            ))}
          </tbody>
        </table>
        <div className={style.payment_container}>
          <button
            data-testid="deny-button"
            onClick={openModal}
            className={style.payment_button_deny}
          >
            Deny
          </button>
          <div className={style.form__container}>
            <form className={style.payment_form}>
              <input
                data-testid="checkbox"
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={changeAgree}
              />
              <label className={style.payment_form_label} htmlFor="adree">
                I agree with the payment schedule
              </label>
            </form>
            {agree ? (
              <button
                className={style.payment_button_send}
                onClick={postAgreeId}
              >
                Send
              </button>
            ) : (
              <button className={style.payment_button_send_disabled}>
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
