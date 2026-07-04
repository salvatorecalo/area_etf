import { SubjectKeys } from "../../store/useQuizStore";

export interface AppConfig {
    devandtec: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    eltmicronanosys: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    eltforindapp: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    embedded: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    microelt: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    analogepower: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    radiofreq: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    siselt: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    commandnetworks: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    meccatronica: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    nanotec: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
    quantum: {
        name: string;
        iselt: number;
        desc: string;
        coeff: {
            chim: number;
            fis1: number;
            alg: number;
            inf: number;
            fis2: number;
            disp: number;
            tds: number;
            appl: number;
            emf: number;
            esd: number;
            ctrl: number;
        };
    };
}

export const appConfigData: AppConfig = {
"devandtec": { name: "Devices and Technologies", iselt: 1, desc: " ", coeff: { chim: 1, fis1: 0, alg: 0, inf: 0, fis2: 1, disp: 2, tds: 0, appl: 0, emf: 1, esd: 0, ctrl: 0 } },
"eltmicronanosys": { name: "Electronic micro and nanosystems", iselt: 1, desc: " ", coeff: { chim: 1, fis1: 0, alg: 0, inf: 0, fis2: 1, disp: 2, tds: 0, appl: 0, emf: 0, esd: 1, ctrl: 0 } },
"eltforindapp": { name: "Electronics for Industrial Applications", iselt: 1, desc: " ", coeff: { chim: 0, fis1: 1, alg: 1, inf: 1, fis2: 0, disp: 0, tds: 1, appl: 0, emf: 0, esd: 0, ctrl: 1 } },
"embedded": { name: "Embedded systems", iselt: 1, desc: " ", coeff: { chim: 0, fis1: 0, alg: 0, inf: 2, fis2: 0, disp: 0, tds: 0, appl: 0, emf: 0, esd: 2, ctrl: 0 } },
"microelt": { name: "Microelectronics", iselt: 1, desc: " ", coeff: { chim: 0, fis1: 0, alg: 0, inf: 0, fis2: 0, disp: 1, tds: 0, appl: 1, emf: 2, esd: 2, ctrl: 0 } },
"analogepower": { name: "Progettazione analogica e di potenza", iselt: 1, desc: " ", coeff: { chim: 0, fis1: 0, alg: 0, inf: 0, fis2: 1, disp: 0, tds: 0, appl: 2, emf: 1, esd: 0, ctrl: 0 } },
"radiofreq": { name: "Radio Frequency Systems Design", iselt: 1, desc: " ", coeff: { chim: 0, fis1: 0, alg: 0, inf: 0, fis2: 1, disp: 0, tds: 0, appl: 1, emf: 2, esd: 0, ctrl: 0 } },
"siselt": { name: "Sistemi elettronici", iselt: 1, desc: " ", coeff: { chim: 0, fis1: 0, alg: 0, inf: 1, fis2: 0, disp: 2, tds: 0, appl: 0, emf: 1, esd: 2, ctrl: 0 } },
"commandnetworks": { name: "COMMUNICATIONS AND COMPUTER NETWORKS ENGINEERING", iselt: 0, desc: " ", coeff: { chim: 0, fis1: 0, alg: 1, inf: 2, fis2: 1, disp: 0, tds: 2, appl: 0, emf: 1, esd: 0, ctrl: 0 } },
"meccatronica": { name: "MECCATRONICA", iselt: 0, desc: " ", coeff: { chim: 0, fis1: 1, alg: 1, inf: 1, fis2: 0, disp: 0, tds: 0, appl: 0, emf: 0, esd: 0, ctrl: 2 } },
"nanotec": { name: "NANOTECNOLOGIE", iselt: 0, desc: " ", coeff: { chim: 2, fis1: 0, alg: 0, inf: 0, fis2: 2, disp: 2, tds: 0, appl: 0, emf: 0, esd: 0, ctrl: 0 } },
"quantum": { name: "QUANTUM ENGINEERING", iselt: 0, desc: " ", coeff: { chim: 2, fis1: 0, alg: 2, inf: 2, fis2: 2, disp: 2, tds: 1, appl: 0, emf: 1, esd: 1, ctrl: 0 } }
};

export const klist: SubjectKeys[] = ["chim", "fis1", "fis2", "alg", "inf", "disp", "tds", "appl", "emf", "esd", "ctrl"];