import style from "./sign.module.css";
import fileImg from "../../assets/img/File_dock_duotone.png";
import { useEffect, useState } from "react";
import { LoaderCom } from "../CompMini/Loader/LoaderCom";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/useRedux";
import { useParams } from "react-router-dom";
import { postUserSign } from "../../utils/store/cardSlice";
import { SignText } from "./SignText";

export const SignContent = () => {
  const { loader } = useAppSelector((store) => store.cardSlice);
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();
  const [agree, setAgree] = useState(false);
  const [showSignText, setShowSignText] = useState(false);
  const changeAgree = () => {
    setAgree(!agree);
  };
  const PostSign = () => {
    dispatch(postUserSign(applicationId));
    localStorage.setItem("postSign", "true");
    setShowSignText(true);
  };
  useEffect(() => {
    const sign = localStorage.getItem("postSign");
    if (sign) {
      setShowSignText(true);
    }
  }, []);

  if (loader) {
    return <LoaderCom />;
  }
  return (
    <section className={style.sign}>
      {showSignText ? (
        <SignText />
      ) : (
        <div>
          <div className={style.sign__container}>
            <h3 className={style.sign__title}>Signing of documents</h3>
            <p className={style.sign__step}>Step 4 of 5</p>
          </div>
          <p className={style.sign__text}>
            Information on interest rates under bank deposit agreements with
            individuals. Center for Corporate Information Disclosure.
            Information of a professional participant in the securities market.
            Information about persons under whose control or significant
            influence the Partner Banks are. By leaving an application, you
            agree to the processing of personal data, obtaining information,
            obtaining access to a credit history, using an analogue of a
            handwritten signature, an offer, a policy regarding the processing
            of personal data, a form of consent to the processing of personal
            data.
          </p>
          <div className={style.sign__container}>
            <img src={fileImg} alt="fileImg" />
            <a
              data-testid="document"
              target="__blank"
              href="https://neostudy.neoflex.ru/pluginfile.php/108672/mod_assign/intro/credit-card-offer.pdf"
            >
              {" "}
              <p className={style.sign__info}>Information on your card</p>
            </a>
          </div>
          <div className={style.button__container}>
            <form className={style.form}>
              <input
                data-testid="checkbox"
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={changeAgree}
              />
              <label className={style.form__label} htmlFor="adree">
                I agree
              </label>
            </form>
            {agree ? (
              <button onClick={PostSign} className={style.button_send}>
                Send
              </button>
            ) : (
              <button className={style.button_send_disabled}>Send</button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
