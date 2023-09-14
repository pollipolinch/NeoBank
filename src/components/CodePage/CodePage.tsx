import { useState, useEffect } from "react";
import style from "./code.module.css";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";
import { postCode } from "../../utils/store/cardSlice";
import { LoaderCom } from "../CompMini/Loader/LoaderCom";
import { CodeText } from "./CodeText";

export const CodePage = () => {
  const { loader, codeErrorStatus, status } = useAppSelector(
    (store) => store.cardSlice
  );
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [fourthNumber, setFourthNumber] = useState("");
  useEffect(() => {
    if (firstNumber && secondNumber && thirdNumber && fourthNumber) {
      const code =
        String(firstNumber) +
        String(secondNumber) +
        String(thirdNumber) +
        String(fourthNumber);
      dispatch(postCode({ applicationId, code }));
    }
  }, [firstNumber, secondNumber, thirdNumber, fourthNumber]);

  if (loader) {
    return <LoaderCom />;
  }
  if (status === "CREDIT_ISSUED") {
    return <CodeText />;
  }
  return (
    <section>
      <h2 className={style.code__title}>Please enter confirmation code</h2>
      <div className={style.code__container}>
        <div
          className={classNames(
            firstNumber
              ? style.input__active_container
              : style.input__inactive_container
          )}
        >
          <input
            className={classNames(
              firstNumber ? style.input__active : style.input__inactive
            )}
            type="number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
          />
        </div>
        <div
          className={classNames(
            secondNumber
              ? style.input__active_container
              : style.input__inactive_container
          )}
        >
          <input
            className={classNames(
              secondNumber ? style.input__active : style.input__inactive
            )}
            type="number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />
        </div>
        <div
          className={classNames(
            thirdNumber
              ? style.input__active_container
              : style.input__inactive_container
          )}
        >
          <input
            className={classNames(
              thirdNumber ? style.input__active : style.input__inactive
            )}
            type="number"
            value={thirdNumber}
            onChange={(e) => setThirdNumber(e.target.value)}
          />
        </div>
        <div
          className={classNames(
            fourthNumber
              ? style.input__active_container
              : style.input__inactive_container
          )}
        >
          <input
            className={classNames(
              fourthNumber ? style.input__active : style.input__inactive
            )}
            type="number"
            value={fourthNumber}
            onChange={(e) => setFourthNumber(e.target.value)}
          />
        </div>
      </div>
      {codeErrorStatus && (
        <p className={style.error__text}>Invalid confirmation code</p>
      )}
    </section>
  );
};
