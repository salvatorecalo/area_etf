import { searchProAndCons } from "@/app/reviews-etf/server_functions/search_pro_and_cons/search_pro_and_cons"
import './course_detail.css'
import Image from "next/image"
import { SearchPanel } from "@/app/reviews-etf/components/SearchPanel/SearchPanel"
import searchSimilarByName from "../../server_functions/search_similar_by_name/search_similar_by_name"
import Link from "next/link"
import { searchForCodeCourse } from "../../server_functions/search_for_code_course/search_for_code_course"

interface PageProps {
    params: Promise<{ courseName: string }>
}
export default async function CoursePage({ params }: PageProps) {
    const { courseName } = await params
    let decodedName = decodeURIComponent(courseName)

    if (decodedName == "run polito") {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
                <Image src="/run.jpeg" alt="Run polito" width="500" height="500" />
            </div>
        )
    }

    const courseResults = await searchForCodeCourse(decodedName)
    console.log(courseResults)
    if (courseResults.length > 1) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", flexDirection: "column", gap: "1rem" }}>
                <SearchPanel with_text={false} />
                <h2 style={{ color: "var(--foreground)", opacity: 0.7 }}>Corsi simili per codice</h2>
                {
                    courseResults.map((courseResult) => {
                        return (
                            <Link key={courseResult._id} href={`/reviews-etf/course/${courseResult.name}`} style={{ border: "1px solid #000000", padding: "10px", borderRadius: "8px", width: "50%", textAlign: "center" }}>
                                <article>
                                    <h3>{courseResult.name}</h3>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        )
    } else if (courseResults.length === 1) {
        decodedName = courseResults[0].name
    }


    const data = await searchProAndCons(decodedName)
    if (!data) {
        const similarResults = await searchSimilarByName(decodedName)
        if (similarResults.length > 0) {
            return (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", flexDirection: "column", gap: "1rem" }}>
                    <SearchPanel with_text={false} />
                    <h2 style={{ color: "var(--foreground)", opacity: 0.7 }}>Corsi simili</h2>
                    {
                        similarResults.map((similarResult) => {
                            return (
                                <Link key={similarResult._id} href={`/reviews-etf/course/${similarResult.name}`} style={{ border: "1px solid #000000", padding: "10px", borderRadius: "8px", width: "50%", textAlign: "center" }}>
                                    <article>
                                        <h3>{similarResult.name}</h3>
                                    </article>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }

        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", flexDirection: "column" }}>
                <SearchPanel with_text={false} />
                <h2 style={{ color: "var(--foreground)", opacity: 0.7 }}>Corso "{decodedName}" non trovato.</h2>
            </div>
        )
    }


    return (
        <main className="course-page-container">
            <header className="course-header">
                <h1 className="title">{decodedName}</h1>
                <span className="subtitle">Panoramica del corso</span>
            </header>

            <div className="reviews-grid">
                <section className="review-card pros-card">
                    <div className="card-header pros-header">
                        <h2>Vantaggi</h2>
                    </div>

                    <ul className="review-list">
                        {data.pro && data.pro.length > 0 ? (
                            data.pro.map((advantage, index) => (
                                <li key={index} className="review-item pro-item">
                                    <span className="bullet">✓</span>
                                    <p>{advantage}</p>
                                </li>
                            ))
                        ) : (
                            <p className="empty-state">Nessun vantaggio segnalato al momento.</p>
                        )}
                    </ul>
                </section>

                <section className="review-card cons-card">
                    <div className="card-header cons-header">
                        <h2>Difetti</h2>
                    </div>

                    <ul className="review-list">
                        {data.not && data.not.length > 0 ? (
                            data.not.map((defect, index) => (
                                <li key={index} className="review-item cons-item">
                                    <span className="bullet">✕</span>
                                    <p>{defect}</p>
                                </li>
                            ))
                        ) : (
                            <p className="empty-state">Nessun difetto segnalato al momento.</p>
                        )}
                    </ul>
                </section>

            </div>
        </main>
    )
}