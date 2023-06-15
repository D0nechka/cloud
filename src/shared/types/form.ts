export interface FirstStepValues {
    phone: string;
    email: string;
}

export interface SecondStepValues {
    nickName: string;
    name: string;
    surname: string;
    sex: string;
}

export interface ThirdStepValues {
    advantages: {
        value: string,
    }[],
    checkbox: number[],
    radio: number | null,
}

export interface FourthStepValues {
    about: string;
}

export type AllStepsType = FirstStepValues & SecondStepValues & ThirdStepValues & FourthStepValues