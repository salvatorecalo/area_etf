"use client"
import { appConfigData, klist } from "../(utils)/functions/get_app_config/get_app_config";
import { getColorClass, getDotColor } from "../(utils)/functions/get_color/get_color";
import { useTranslation } from "../(utils)/language_context/language_context";
import { useQuizStore } from "../(utils)/store/useQuizStore";

export default function ResultsPage() {
    const scores = useQuizStore((state) => state.scores);
    const { t } = useTranslation();

    const calculatedResults = Object.entries(appConfigData).map(([key, course]) => {
        let pScore = 0;
        let maxScore = 0;

        klist.forEach(subj => {
            const coeff = course.coeff[subj] || 0;
            if (coeff !== 0) {
                const userVal = (scores[subj] || 0);
                pScore += (userVal * coeff);
                maxScore += coeff;
            }
        });

        const finalScore = maxScore > 0 ? pScore / maxScore : 0;
        return { ...course, finalScore };
    });

    calculatedResults.sort((a, b) => b.finalScore - a.finalScore)

    return (
        <main className="max-w-5xl mx-auto px-4 py-10 font-sans text-gray-800">
            <header className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
                    {t.quizTitle}
                </h1>
                <p className="text-gray-600">{t.basedOn}</p>
            </header>

            <section className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">{t.yourRank}</h2>
                <div className="grid gap-3">
                    {calculatedResults.map((course) => (
                        <div
                            key={course.name}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all hover:shadow-md ${getColorClass(course.finalScore)}`}
                        >
                            <span className={`font-semibold text-sm md:text-base ${course.iselt === 0 ? "text-blue-800 underline decoration-blue-300" : "text-gray-800"}`}>
                                {course.name} {course.iselt === 0 && t.extra}
                            </span>
                            <div className="flex items-center gap-3">
                                <span className={`text-xl ${getDotColor(course.finalScore)}`}>█</span>
                                <b className="text-lg w-12 text-right">{course.finalScore.toFixed(2)}</b>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-orange-900 text-sm space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">{t.interpretResults}</h3>
                    <p>{t.attentionOne}</p>
                    <p>{t.attentionTwo}</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm">
                    <h3 className="font-bold text-lg text-blue-900 mb-4">{t.colorLegend}</h3>
                    <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-red-600">█</span> <b>{t.range1}</b> {t.notForYou}</li>
                        <li className="flex gap-2"><span className="text-orange-500">█</span> <b>{t.range2}</b> {t.littleProbability}</li>
                        <li className="flex gap-2"><span className="text-yellow-500">█</span> <b>{t.range3}</b> {t.notMuch}</li>
                        <li className="flex gap-2"><span className="text-gray-500">█</span> <b>{t.range4}</b> {t.quizNotSufficient}</li>
                        <li className="flex gap-2"><span className="text-lime-500">█</span> <b>{t.range5}</b> {t.seemsOk}</li>
                        <li className="flex gap-2"><span className="text-green-500">█</span> <b>{t.range6}</b> {t.highProbability}</li>
                        <li className="flex gap-2"><span className="text-green-700">█</span> <b>{t.range7}</b> {t.seemsYourChoice}</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
                <div className="p-6 bg-blue-900 text-white">
                    <h3 className="text-xl font-bold">{t.matrixTitle}</h3>
                    <p className="text-sm text-blue-200 mt-1">{t.matrixFormula}</p>
                </div>
                <div className="overflow-x-auto p-4">
                    <table className="w-full text-sm text-center border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border text-left rounded-tl-lg">{t.masterDegree}</th>
                                {klist.map(k => <th key={k} className="p-3 border uppercase text-xs">{k}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(appConfigData).map((course) => (
                                <tr key={course.name} className="hover:bg-gray-50 transition-colors">
                                    <td className="font-semibold p-3 border text-left text-xs">{course.name}</td>
                                    {klist.map(k => {
                                        const val = course.coeff[k];
                                        return (
                                            <td key={k} className={`p-3 border font-bold ${val === 2 ? 'text-red-500 bg-red-50' :
                                                    val === 1 ? 'text-orange-500 bg-orange-50' : 'text-gray-300'
                                                }`}>
                                                {val}
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}