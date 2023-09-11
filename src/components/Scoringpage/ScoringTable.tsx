import { startTransition, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/useRedux';
import { LoaderCom } from '../CompMini/Loader/LoaderCom';
import { useParams } from 'react-router-dom';
import style from './scoringPage.module.css';
import ErrorIcon from '../../assets/icons/ErrorIcon';
import SuccessIcon from '../../assets/icons/SuccessIcon';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { ScoringForm, AppStatus } from '../../utils/types/types';
import { postScoringData, getStatus } from '../../utils/store/cardSlice';
import { useNavigate } from 'react-router-dom';
import {
    gender,
    maritalStatus,
    dependentAmount,
    employmentStatus,
    position,
} from '../../utils/constants/scoringSelect';
import { ScoringText } from './ScoringText';

export const ScoringTable = () => {
    const { loader, status } = useAppSelector((store) => store.cardSlice);
    const offers = JSON.parse(localStorage.getItem('offers')!);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, touchedFields },
    } = useForm<ScoringForm>({ mode: 'onBlur' });
    const navigate = useNavigate();
    const { applicationId } = useParams();
    const handleSubmitForm = (data: ScoringForm) => {
        startTransition(() => {
            dispatch(postScoringData({ data, applicationId }));
            reset();
        });
        setTimeout(() => {
            if (offers) {
                dispatch(getStatus(String(offers[0].applicationId)));
            }
        }, 10000);
    };
    useEffect(() => {
        if (status === AppStatus.CC_DENIED) {
            navigate('/');
            localStorage.removeItem('offers');
        }
    }, [status]);
    if (loader) {
        return <LoaderCom />;
    }
    if (status === AppStatus.CC_DENIED || status === AppStatus.CC_APPROVED) {
        return <ScoringText />;
    }
    return (
        <section>
            <div className={style.scoring__container}>
                <div className={style.scoring__container_info}>
                    <h3 className={style.scoring__container_title}>
                        Continuation of the application
                    </h3>
                    <p className={style.scoring__container_stepNum}>
                        Step 2 of 5
                    </p>
                </div>
                <div className={style.scoring__select}>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className={style.scoring__select_container}>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="gender"
                                >
                                    What's your gender{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <select
                                    className={classNames(
                                        errors.gender
                                            ? style.scoring__select_input_error
                                            : style.scoring__select_cont
                                    )}
                                    id="gender"
                                    defaultValue=""
                                    {...register('gender', { required: true })}
                                >
                                    <option value="" disabled></option>
                                    {gender.map((ell) => (
                                        <option
                                            key={ell.value}
                                            value={ell.value}
                                        >
                                            {ell.text}
                                        </option>
                                    ))}
                                </select>
                                {errors.gender && (
                                    <p className={style.scoring__errors}>
                                        Select one of the options
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="maritalStatus"
                                >
                                    Your marital status{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <select
                                    className={classNames(
                                        errors.maritalStatus
                                            ? style.scoring__select_input_error
                                            : style.scoring__select_cont
                                    )}
                                    id="maritalStatus"
                                    defaultValue=""
                                    {...register('maritalStatus', {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled></option>
                                    {maritalStatus.map((ell) => (
                                        <option
                                            key={ell.value}
                                            value={ell.value}
                                        >
                                            {ell.text}
                                        </option>
                                    ))}
                                </select>
                                {errors.maritalStatus && (
                                    <p className={style.scoring__errors}>
                                        Select one of the options
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="dependentAmount"
                                >
                                    Your number of dependents{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <select
                                    className={classNames(
                                        errors.dependentAmount
                                            ? style.scoring__select_input_error
                                            : style.scoring__select_cont
                                    )}
                                    id="dependentAmount"
                                    defaultValue=""
                                    {...register('dependentAmount', {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled></option>
                                    {dependentAmount.map((ell) => (
                                        <option
                                            key={ell.value}
                                            value={ell.value}
                                        >
                                            {ell.text}
                                        </option>
                                    ))}
                                </select>
                                {errors.dependentAmount && (
                                    <p className={style.scoring__errors}>
                                        Select one of the options
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="passportIssueDate"
                                >
                                    Date of issue of the passport{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <div
                                    className={
                                        style.scoring__input_container_maxi
                                    }
                                >
                                    <input
                                        className={classNames(
                                            errors.passportIssueDate
                                                ? style.scoring__select_input_error_maxi
                                                : style.scoring__select_input_maxi
                                        )}
                                        id="passportIssueDate"
                                        max={new Date()
                                            .toISOString()
                                            .slice(0, 10)}
                                        type="date"
                                        placeholder="Select Date and Time"
                                        {...register('passportIssueDate', {
                                            required: true,
                                            valueAsDate: true,
                                        })}
                                    />
                                    {errors.passportIssueDate && <ErrorIcon />}
                                    {touchedFields.passportIssueDate &&
                                        !errors.passportIssueDate && (
                                            <SuccessIcon />
                                        )}
                                </div>
                                {errors.passportIssueDate && (
                                    <p className={style.scoring__errors}>
                                        Incorrect date of passport issue date
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="passportIssueBranch"
                                >
                                    Division code{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <div
                                    className={
                                        style.scoring__input_container_maxi
                                    }
                                >
                                    <input
                                        className={classNames(
                                            errors.passportIssueBranch
                                                ? style.scoring__select_input_error_maxi
                                                : style.scoring__select_input_maxi
                                        )}
                                        id="passportIssueBranch"
                                        type="text"
                                        placeholder="000000"
                                        {...register('passportIssueBranch', {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 6,
                                            pattern:
                                                /^[+]?([0-9]*[.,])?[0-9]+$/,
                                        })}
                                    />
                                    {errors.passportIssueBranch && (
                                        <ErrorIcon />
                                    )}
                                    {touchedFields.passportIssueBranch &&
                                        !errors.passportIssueBranch && (
                                            <SuccessIcon />
                                        )}
                                </div>
                                {errors.passportIssueBranch && (
                                    <p className={style.scoring__errors}>
                                        The series must be 6 digits
                                    </p>
                                )}
                            </div>
                        </div>
                        <p className={style.scoring__container_text}>
                            Employment
                        </p>
                        <div className={style.scoring__select_container}>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="employmentStatus"
                                >
                                    Your employment status{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <select
                                    className={classNames(
                                        errors.employmentStatus
                                            ? style.scoring__select_input_error
                                            : style.scoring__select_cont
                                    )}
                                    id="employmentStatus"
                                    defaultValue=""
                                    {...register('employmentStatus', {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled></option>
                                    {employmentStatus.map((ell) => (
                                        <option
                                            key={ell.value}
                                            value={ell.value}
                                        >
                                            {ell.text}
                                        </option>
                                    ))}
                                </select>
                                {errors.employmentStatus && (
                                    <p className={style.scoring__errors}>
                                        Select one of the options
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="employerINN"
                                >
                                    Your employer INN{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <div className={style.scoring__input_container}>
                                    <input
                                        className={classNames(
                                            errors.employerINN
                                                ? style.scoring__select_input_error
                                                : style.scoring__select_input
                                        )}
                                        id="employerINN"
                                        type="text"
                                        placeholder="000000000000"
                                        {...register('employerINN', {
                                            required: true,
                                            minLength: 12,
                                            maxLength: 12,
                                            pattern:
                                                /^[+]?([0-9]*[.,])?[0-9]+$/,
                                        })}
                                    />
                                    {errors.employerINN && <ErrorIcon />}
                                    {touchedFields.employerINN &&
                                        !errors.employerINN && <SuccessIcon />}
                                </div>
                                {errors.employerINN && (
                                    <p className={style.scoring__errors}>
                                        Department code must be 12 digits
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="salary"
                                >
                                    Your salary{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <div className={style.scoring__input_container}>
                                    <input
                                        className={classNames(
                                            errors.salary
                                                ? style.scoring__select_input_error
                                                : style.scoring__select_input
                                        )}
                                        id="salary"
                                        type="text"
                                        placeholder="For example 100 000"
                                        {...register('salary', {
                                            required: true,
                                            pattern:
                                                /^[+]?([0-9]*[.,])?[0-9]+$/,
                                        })}
                                    />
                                    {errors.salary && <ErrorIcon />}
                                    {touchedFields.salary && !errors.salary && (
                                        <SuccessIcon />
                                    )}
                                </div>
                                {errors.salary && (
                                    <p className={style.scoring__errors}>
                                        Enter your salary
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="position"
                                >
                                    Your position{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <select
                                    className={classNames(
                                        errors.position
                                            ? style.scoring__select_input_error
                                            : style.scoring__select_cont
                                    )}
                                    id="position"
                                    defaultValue=""
                                    {...register('position', {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled></option>
                                    {position.map((ell) => (
                                        <option
                                            key={ell.value}
                                            value={ell.value}
                                        >
                                            {ell.text}
                                        </option>
                                    ))}
                                </select>
                                {errors.position && (
                                    <p className={style.scoring__errors}>
                                        Select one of the options
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="workExperienceTotal"
                                >
                                    Your work experience total{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <div className={style.scoring__input_container}>
                                    <input
                                        className={classNames(
                                            errors.workExperienceTotal
                                                ? style.scoring__select_input_error
                                                : style.scoring__select_input
                                        )}
                                        id="workExperienceTotal"
                                        type="text"
                                        placeholder="For example 10"
                                        {...register('workExperienceTotal', {
                                            required: true,
                                            maxLength: 2,
                                            pattern:
                                                /^[+]?([0-9]*[.,])?[0-9]+$/,
                                        })}
                                    />
                                    {errors.workExperienceTotal && (
                                        <ErrorIcon />
                                    )}
                                    {touchedFields.workExperienceTotal &&
                                        !errors.workExperienceTotal && (
                                            <SuccessIcon />
                                        )}
                                </div>
                                {errors.workExperienceTotal && (
                                    <p className={style.scoring__errors}>
                                        Enter your work experience total
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={style.scoring__select_label}
                                    htmlFor="workExperienceCurrent"
                                >
                                    Your work experience current{' '}
                                    <span
                                        className={style.scoring__select_stars}
                                    >
                                        *
                                    </span>
                                </label>
                                <div className={style.scoring__input_container}>
                                    <input
                                        className={classNames(
                                            errors.workExperienceCurrent
                                                ? style.scoring__select_input_error
                                                : style.scoring__select_input
                                        )}
                                        id="workExperienceCurrent"
                                        type="text"
                                        placeholder="For example 2"
                                        {...register('workExperienceCurrent', {
                                            required: true,
                                            maxLength: 2,
                                            pattern:
                                                /^[+]?([0-9]*[.,])?[0-9]+$/,
                                        })}
                                    />
                                    {errors.workExperienceCurrent && (
                                        <ErrorIcon />
                                    )}
                                    {touchedFields.workExperienceCurrent &&
                                        !errors.workExperienceCurrent && (
                                            <SuccessIcon />
                                        )}
                                </div>
                                {errors.workExperienceCurrent && (
                                    <p className={style.scoring__errors}>
                                        Enter your work experience current
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={style.scoring__button_container}>
                            <button
                                type="submit"
                                className={style.scoring__button}
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
