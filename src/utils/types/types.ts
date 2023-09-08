export interface CardForm {
    amount: number;
    term: number;
    firstName: string;
    lastName: string;
    middleName: string | null;
    email: string;
    birthdate: string | Date;
    passportSeries: string;
    passportNumber: string;
}
export interface ScoringForm {
    gender: 'MALE' | 'FAMALE';
    maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
    dependentAmount: number;
    passportIssueDate: string;
    passportIssueBranch: string;
    employmentStatus:
        | 'UNEMPLOYED'
        | 'SELF_EMPLOYED'
        | 'EMPLOYED'
        | 'BUSINESS_OWNER';
    employerINN: number;
    salary: number;
    position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
    workExperienceTotal: number;
    workExperienceCurrent: number;
}

export interface News {
    urlToImage: string | undefined;
    title: string;
    url: string;
    description: string | null;
}
export interface Month {
    value: number;
    text: string;
}
export interface FAQItem {
    q: string;
    a: string;
}
export interface IPropsAccord {
    faqItem: FAQItem;
    onClick: () => void;
    isOpen: boolean;
}
export interface IAcc {
    faqList: FAQItem[];
}

export interface TTab {
    id: string | number;
    label: string | number;
}

export interface TProps {
    onClick: (id: number | string) => void;
    selectedId: string | number;
    tabs: TTab[];
}
export interface IExchangeItem {
    value: string;
}
export interface NewsIt {
    data: News;
}
export enum AppStatus {
    PREAPPROVAL = 'PREAPPROVAL',
    CLIENT_DENIED = 'CLIENT_DENIED',
    APPROVED = 'APPROVED',
    CC_DENIED = 'CC_DENIED',
    CC_APPROVED = 'CC_APPROVED',
    PREPARE_DOCUMENTS = 'PREPARE_DOCUMENTS',
    DOCUMENT_CREATED = 'DOCUMENT_CREATED',
    CREDIT_ISSUED = 'CREDIT_ISSUED',
}
export interface IPayment {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
    active: boolean;
}
export interface IOffer {
    applicationId: number;
    isInsuranceEnabled: boolean;
    isSalaryClient: boolean;
    monthlyPayment: number;
    rate: number;
    requestedAmount: number;
    term: number;
    totalAmount: number;
}
export enum ISortValue {
    NUMBER = 'number',
    TOTAL_PAYMENT = 'totalPayment',
    DEBT_PAYMENY = 'debtPayment',
    INTEREST_PAYMENT = 'interestPayment',
    REMAINING_DEBT = 'remainingDebt',
    DATE = 'date',
}
export interface ISort {
    name: string;
    sort: string;
    active: boolean;
}
export interface IGenderOption {
    value: 'MALE' | 'FEMALE';
    text: string;
}
export interface IMaritalOption {
    value: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
    text: string;
}
export interface IDependentOption {
    value: 0 | 1 | 2 | 3 | 4 | 5;
    text: string | number;
}
export interface IEmploymentOption {
    value: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
    text: string;
}
export interface IPositionOption {
    value: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
    text: string;
}
export interface CardSliceState {
    loader: boolean;
    selectedOffer: boolean;
    getOffers: boolean;
    modal: boolean;
    approveModal: boolean;
    codeErrorStatus: boolean;
    status: AppStatus | null;
    monthlyPayments: IPayment[];
}

export interface IPostScoringData {
    data: ScoringForm;
    applicationId: string | undefined;
}
export interface IPostCode {
    applicationId: string | undefined;
    code: string;
}
