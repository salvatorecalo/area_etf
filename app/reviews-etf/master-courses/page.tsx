import Link from "next/link";
import { getSectionData } from "../server_functions/get_section_data/get_section_data";
import styles from './master-courses.module.css'

export default async function BachelorCourses(){
    const bachelorCourses = await getSectionData("master")
    
    return (
        <section className={styles.container}>
            
            <nav className={styles.nav}>
                <Link href="#primoAnno" className={styles.navLink}>Primo Anno</Link>
                <Link href="#secondoAnno" className={styles.navLink}>Secondo Anno</Link>
                <Link href="#tabellaD" className={styles.navLink}>Tabella D</Link>
            </nav>

            <div id="primoAnno" className={styles.yearSection}>
                <h2 className={styles.yearTitle}>Primo anno</h2>
                <div className={styles.grid}>
                    {
                        bachelorCourses && bachelorCourses.filter((course) => course.year === "primoAnno").map(
                            (course) => (
                                <Link href={`/reviews-etf/course/${course.name}`} key={course._id} className={styles.courseCard}>
                                    {course.name}
                                </Link>
                            )
                        )
                    }
                </div>
            </div>

            <div id="secondoAnno" className={styles.yearSection}>
                <h2 className={styles.yearTitle}>Secondo anno</h2>
                <div className={styles.grid}>
                    {
                        bachelorCourses && bachelorCourses.filter((course) => course.year === "secondoAnno").map(
                            (course) => (
                                <Link href={`/reviews-etf/course/${course.name}`} key={course._id} className={styles.courseCard}>
                                    {course.name}
                                </Link>
                            )
                        )
                    }
                </div>
            </div>

            <div id="tabellaD" className={styles.yearSection}>
                <h2 className={styles.yearTitle}>Terzo anno</h2>
                <div className={styles.grid}>
                    {
                        bachelorCourses && bachelorCourses.filter((course) => course.year === "terzoAnno").map(
                            (course) => (
                                <Link href={`/reviews-etf/course/${course.name}`} key={course._id} className={styles.courseCard}>
                                    {course.name}
                                </Link>
                            )
                        )
                    }
                </div>
            </div>

        </section>
    )
}