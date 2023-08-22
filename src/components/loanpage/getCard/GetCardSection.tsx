import style from './getCard.module.css';
import { useState } from 'react';
import { LoaderCom } from '../../CompMini/Loader/LoaderCom';
import { CardForm, Month } from '../../../utils/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { monthSelect } from '../../../utils/constants/monthSelect';
import SuccessIcon from '../../../assets/icons/SuccessIcon';
import ErrorIcon from '../../../assets/icons/ErrorIcon';
import { request } from '../../../utils/requests/Request';
import classNames from 'classnames';

export const GetCardSection = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, touchedFields },
    } = useForm<CardForm>({ mode: 'onBlur' });
    const [showLoader, setShowLoader] = useState(false);
    const [term, setTerm] = useState(6);
    const [amount, setAmount] = useState(150000);

    const postData = async (data: CardForm) => {
        setShowLoader(true);
        const body = JSON.stringify({
            ...data,
            middleName: data.middleName ? data.middleName : null,
        });
        const url = `http://localhost:8080/application`;
        const { PostRequest } = request();
        await PostRequest(url, 'POST', body);
        setShowLoader(false);
    };

    const submit: SubmitHandler<CardForm> = async (data) => {
        await postData({ ...data, amount, term });
        reset();
        setAmount(150000);
        setTerm(6);
    };
    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setAmount(newValue);
    };

    return (
        <section className="getCard">
            <h2 className={style.getCard__title}>How to get a card</h2>
            <div className={style.getCard__steps}>
                <div className={style.getCard__step}>
                    <div className={style.getCard__figure}>
                        <div className={style.getCard__circle}>1</div>
                        <div className={style.getCard__line}></div>
                    </div>
                    <p className={style.getCard__text}>
                        Fill out an online application - you do not need to
                        visit the bank
                    </p>
                </div>
                <div className={style.getCard__step}>
                    <div className={style.getCard__figure}>
                        <div className={style.getCard__circle}>2</div>
                        <div className={style.getCard__line}></div>
                    </div>
                    <p className={style.getCard__text}>
                        Find out the bank's decision immediately after filling
                        out the application
                    </p>
                </div>
                <div className={style.getCard__step}>
                    <div className={style.getCard__figure}>
                        <div className={style.getCard__circle}>3</div>
                        <div className={style.getCard__line}></div>
                    </div>
                    <p className={style.getCard__text}>
                        The bank will deliver the card free of charge, wherever
                        convenient, to your city
                    </p>
                </div>
            </div>
            {showLoader ? (
                <LoaderCom />
            ) : (
                <div id="getCard" className={style.getCard__container}>
                    <div className={style.getCard__container_info}>
                        <div className={style.getCard__container_info_left}>
                            <div className={style.getCard__container_steps}>
                                <h3 className={style.getCard__container__title}>
                                    Customize your card
                                </h3>
                                <p className={style.getCard__container_stepNum}>
                                    Step 1 of 5
                                </p>
                            </div>
                            <div className={style.getCard__amount}>
                                <h3 className={style.getCard__container_text}>
                                    Select amount
                                </h3>
                                <p className={style.getCard__container_text}>
                                    {amount}
                                </p>
                                <input
                                    className={style.getCard__container_slider}
                                    type="range"
                                    onChange={handleAmountChange}
                                    value={amount}
                                    max={600000}
                                    min={15000}
                                />
                                <div className={style.getCard__container_nums}>
                                    <p className={style.getCard__amount_num}>
                                        15 000
                                    </p>
                                    <p className={style.getCard__amount_num}>
                                        600 000
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.getCard__container_info_right}>
                            <h5 className={style.getCard__container_about}>
                                You have chosen the amount
                            </h5>
                            <p className={style.getCard__container_text}>
                                <input
                                    type="number"
                                    min={15000}
                                    max={600000}
                                    onChange={handleAmountChange}
                                    value={amount}
                                />{' '}
                                ₽
                            </p>
                            <div
                                className={style.getCard__container_range}
                            ></div>
                        </div>
                    </div>
                    <div className={style.getCard__select}>
                        <h3 className={style.getCard__container_about}>
                            Contact Information
                        </h3>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className={style.getCard__select_container}>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="last"
                                    >
                                        Your last name{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={classNames(
                                                errors.lastName
                                                    ? style.getCard__select_input_error
                                                    : style.getCard__select_input
                                            )}
                                            id="last"
                                            type="text"
                                            placeholder="For Example Doe"
                                            {...register('lastName', {
                                                required: true,
                                                pattern: /^[A-Za-z]+$/i,
                                            })}
                                        />
                                        {errors.lastName && <ErrorIcon />}
                                        {touchedFields.lastName &&
                                            !errors.lastName && <SuccessIcon />}
                                    </div>
                                    {errors.lastName && (
                                        <p className={style.getCard__errors}>
                                            Enter your last name
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="first"
                                    >
                                        Your first name{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={classNames(
                                                errors.firstName
                                                    ? style.getCard__select_input_error
                                                    : style.getCard__select_input
                                            )}
                                            id="first"
                                            type="text"
                                            placeholder="For Example Jhon"
                                            {...register('firstName', {
                                                required: true,
                                                pattern: /^[A-Za-z]+$/i,
                                            })}
                                        />
                                        {errors.firstName && <ErrorIcon />}
                                        {touchedFields.firstName &&
                                            !errors.firstName && (
                                                <SuccessIcon />
                                            )}
                                    </div>
                                    {errors.firstName && (
                                        <p className={style.getCard__errors}>
                                            Enter your first name
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="patronymic"
                                    >
                                        Your patronymic
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={
                                                style.getCard__select_input
                                            }
                                            id="patronymic"
                                            type="text"
                                            placeholder="For Example Victorovich"
                                            {...register('middleName')}
                                        />
                                        {errors.middleName && <ErrorIcon />}
                                    </div>
                                </div>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="select"
                                    >
                                        Select term{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <select
                                        value={term}
                                        onChange={(event) =>
                                            setTerm(Number(event.target.value))
                                        }
                                        className={style.getCard__select_cont}
                                    >
                                        {monthSelect.map((ell: Month) => (
                                            <option
                                                key={ell.value}
                                                value={ell.value}
                                            >
                                                {ell.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.term && (
                                    <p className={style.getCard__errors}>
                                        Select one of the options
                                    </p>
                                )}
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="email"
                                    >
                                        Your email{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={classNames(
                                                errors.email
                                                    ? style.getCard__select_input_error
                                                    : style.getCard__select_input
                                            )}
                                            id="email"
                                            type="text"
                                            placeholder="test@gmail.com"
                                            {...register('email', {
                                                required: true,
                                                pattern:
                                                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                                            })}
                                        />
                                        {errors.email && <ErrorIcon />}
                                        {touchedFields.email &&
                                            !errors.email && <SuccessIcon />}
                                    </div>
                                    {errors.email && (
                                        <p className={style.getCard__errors}>
                                            Incorrect email address
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="birth"
                                    >
                                        Your date of birth{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={classNames(
                                                errors.birthdate
                                                    ? style.getCard__select_input_error
                                                    : style.getCard__select_input
                                            )}
                                            id="birth"
                                            type="date"
                                            placeholder="Select Date and Time"
                                            {...register('birthdate', {
                                                required: true,
                                                valueAsDate: true,
                                            })}
                                            max={new Date(
                                                new Date().setFullYear(
                                                    new Date().getFullYear() -
                                                        18
                                                )
                                            )
                                                .toISOString()
                                                .slice(0, 10)}
                                        />
                                        {errors.birthdate && <ErrorIcon />}
                                        {touchedFields.birthdate &&
                                            !errors.birthdate && (
                                                <SuccessIcon />
                                            )}
                                    </div>
                                    {errors.birthdate && (
                                        <p className={style.getCard__errors}>
                                            Incorrect date of birth
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="series"
                                    >
                                        Your passport series{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={classNames(
                                                errors.passportSeries
                                                    ? style.getCard__select_input_error
                                                    : style.getCard__select_input
                                            )}
                                            id="series"
                                            type="text"
                                            placeholder="0000"
                                            {...register('passportSeries', {
                                                required: true,
                                                minLength: 4,
                                                maxLength: 4,
                                                pattern:
                                                    /^[+]?([0-9]*[.,])?[0-9]+$/,
                                            })}
                                        />
                                        {errors.passportSeries && <ErrorIcon />}
                                        {touchedFields.passportSeries &&
                                            !errors.passportSeries && (
                                                <SuccessIcon />
                                            )}
                                    </div>
                                    {errors.passportSeries && (
                                        <p className={style.getCard__errors}>
                                            The series must be 4 digits
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        className={style.getCard__select_label}
                                        htmlFor="number"
                                    >
                                        Your passport number{' '}
                                        <span
                                            className={
                                                style.getCard__select_stars
                                            }
                                        >
                                            *
                                        </span>
                                    </label>
                                    <div
                                        className={
                                            style.getCard__input_container
                                        }
                                    >
                                        <input
                                            className={classNames(
                                                errors.passportNumber
                                                    ? style.getCard__select_input_error
                                                    : style.getCard__select_input
                                            )}
                                            id="number"
                                            type="text"
                                            placeholder="000000"
                                            {...register('passportNumber', {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 6,
                                                pattern:
                                                    /^[+]?([0-9]*[.,])?[0-9]+$/,
                                            })}
                                        />
                                        {errors.passportNumber && <ErrorIcon />}
                                        {touchedFields.passportNumber &&
                                            !errors.passportNumber && (
                                                <SuccessIcon />
                                            )}
                                    </div>
                                    {errors.passportNumber && (
                                        <p className={style.getCard__errors}>
                                            The series must be 6 digits
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={style.getCard__button_container}>
                                <button
                                    type="submit"
                                    className={style.getCard__button}
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};
