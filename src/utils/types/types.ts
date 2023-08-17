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
