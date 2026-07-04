"use client"
import { FormEvent } from "react";
import { SubjectsFormElement } from "./components/subjects_form_elm";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/orient-etf/(utils)/language_context/language_context";

export function SubjectsForm() {
    const router = useRouter()
    const { t } = useTranslation()

    function formSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.replace("/orient-etf/results")
    }

    return (
        <form onSubmit={formSubmit}>
            <SubjectsFormElement name="alg" subject={t.subjAlg} />
            <SubjectsFormElement name="emf" subject={t.subjEmf} />
            <SubjectsFormElement name="chim" subject={t.subjChim} />
            <SubjectsFormElement name="ctrl" subject={t.subjCtrl} />
            <SubjectsFormElement name="appl" subject={t.subjAppl} />
            <SubjectsFormElement name="esd" subject={t.subjEsd} />
            <SubjectsFormElement name="fis1" subject={t.subjFis1} />
            <SubjectsFormElement name="fis2" subject={t.subjFis2} />
            <SubjectsFormElement name="inf" subject={t.subjInf} />
            <SubjectsFormElement name="tds" subject={t.subjTds} />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-8 transition-colors"
            >
                {t.btnDiscover}
            </button>
        </form>
    )
} 