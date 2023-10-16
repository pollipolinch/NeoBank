import {
    IGenderOption,
    IMaritalOption,
    IDependentOption,
    IEmploymentOption,
    IPositionOption,
} from '../types/types';

export const gender: IGenderOption[] = [
    { value: 'MALE', text: 'Male' },
    { value: 'FEMALE', text: 'Female' },
];

export const maritalStatus: IMaritalOption[] = [
    { value: 'MARRIED', text: 'Married' },
    { value: 'DIVORCED', text: 'Divorced' },
    { value: 'SINGLE', text: 'Single' },
    { value: 'WIDOW_WIDOWER', text: 'Widow Widower' },
];

export const dependentAmount: IDependentOption[] = [
    { value: 0, text: 0 },
    { value: 1, text: 1 },
    { value: 2, text: 2 },
    { value: 3, text: 3 },
    { value: 4, text: 4 },
    { value: 5, text: 5 },
];

export const employmentStatus: IEmploymentOption[] = [
    { value: 'UNEMPLOYED', text: 'Unemployed' },
    { value: 'SELF_EMPLOYED', text: 'Self Employed' },
    { value: 'EMPLOYED', text: 'Employed' },
    { value: 'BUSINESS_OWNER', text: 'Business owner' },
];

export const position: IPositionOption[] = [
    { value: 'WORKER', text: 'Worker' },
    { value: 'MID_MANAGER', text: 'Mid Manager' },
    { value: 'TOP_MANAGER', text: 'Top Manager' },
    { value: 'OWNER', text: 'Owner' },
];
