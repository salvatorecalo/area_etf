"use client"
import { useTranslation } from "@/app/orient-etf/(utils)/language_context/language_context";
import { useQuizStore } from "@/app/orient-etf/(utils)/store/useQuizStore";

interface SubjectsFormElementProps {
    subject: string;
    name: string;
}

export function SubjectsFormElement({ subject, name }: SubjectsFormElementProps) {
    const setCourseScore = useQuizStore((state) => state.setCourseScore)
    const {t} = useTranslation()
    
    const options = [t.optNotAtAll, t.optLittle, t.optNeutral, t.optEnough, t.optVeryMuch];

    return (
        <div className="w-full space-y-3 py-4 border-b border-gray-100 last:border-0 my-2">
            <label className="block text-sm font-semibold text-gray-800">
                {subject}
            </label>

            <div className="flex flex-wrap gap-4 md:gap-6">
                {options.map((label, index) => (
                    <label 
                        key={label} 
                        className="flex items-center space-x-2 cursor-pointer group"
                    >
                        <input
                            type="radio"
                            name={name}
                            value={(index - 2)/2}
                            onChange={(e) => setCourseScore(name, parseInt(e.target.value))}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 transition-colors"
                            required
                        />
                        <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                            {label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}